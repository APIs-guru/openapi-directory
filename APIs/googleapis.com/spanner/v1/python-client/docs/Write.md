# Write

Arguments to insert, update, insert_or_update, and replace operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | **List[str]** | The names of the columns in table to be written. The list of columns must contain enough columns to allow Cloud Spanner to derive values for all primary key columns in the row(s) to be modified. | [optional] 
**table** | **str** | Required. The table whose rows will be written. | [optional] 
**values** | **List[List[object]]** | The values to be written. &#x60;values&#x60; can contain more than one list of values. If it does, then multiple rows are written, one for each entry in &#x60;values&#x60;. Each list in &#x60;values&#x60; must have exactly as many entries as there are entries in columns above. Sending multiple lists is equivalent to sending multiple &#x60;Mutation&#x60;s, each containing one &#x60;values&#x60; entry and repeating table and columns. Individual values in each list are encoded as described here. | [optional] 

## Example

```python
from openapi_client.models.write import Write

# TODO update the JSON string below
json = "{}"
# create an instance of Write from a JSON string
write_instance = Write.from_json(json)
# print the JSON string representation of the object
print(Write.to_json())

# convert the object into a dict
write_dict = write_instance.to_dict()
# create an instance of Write from a dict
write_from_dict = Write.from_dict(write_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SuppressionInfo

Information about entries that were omitted from the session.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reason** | **str** | The reason that entries were omitted from the session. | [optional] 
**suppressed_count** | **int** | A lower bound on the count of entries omitted due to reason. | [optional] 

## Example

```python
from openapi_client.models.suppression_info import SuppressionInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SuppressionInfo from a JSON string
suppression_info_instance = SuppressionInfo.from_json(json)
# print the JSON string representation of the object
print(SuppressionInfo.to_json())

# convert the object into a dict
suppression_info_dict = suppression_info_instance.to_dict()
# create an instance of SuppressionInfo from a dict
suppression_info_from_dict = SuppressionInfo.from_dict(suppression_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



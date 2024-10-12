# BatchNameMatchedOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**matched_names** | [**List[NameMatchedOut]**](NameMatchedOut.md) | Classified matched names | [optional] 

## Example

```python
from openapi_client.models.batch_name_matched_out import BatchNameMatchedOut

# TODO update the JSON string below
json = "{}"
# create an instance of BatchNameMatchedOut from a JSON string
batch_name_matched_out_instance = BatchNameMatchedOut.from_json(json)
# print the JSON string representation of the object
print(BatchNameMatchedOut.to_json())

# convert the object into a dict
batch_name_matched_out_dict = batch_name_matched_out_instance.to_dict()
# create an instance of BatchNameMatchedOut from a dict
batch_name_matched_out_from_dict = BatchNameMatchedOut.from_dict(batch_name_matched_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



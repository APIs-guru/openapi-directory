# CreatedBy


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**user_name** | **str** | A user&#39;s full name or a service principal&#39;s app ID.  This is PII and should never be logged. | [optional] 
**user_object_id** | **str** | A user or service principal&#39;s object ID.  This is PII and should never be logged. | [optional] 
**user_tenant_id** | **str** | A user or service principal&#39;s tenant ID. | [optional] 

## Example

```python
from openapi_client.models.created_by import CreatedBy

# TODO update the JSON string below
json = "{}"
# create an instance of CreatedBy from a JSON string
created_by_instance = CreatedBy.from_json(json)
# print the JSON string representation of the object
print(CreatedBy.to_json())

# convert the object into a dict
created_by_dict = created_by_instance.to_dict()
# create an instance of CreatedBy from a dict
created_by_from_dict = CreatedBy.from_dict(created_by_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



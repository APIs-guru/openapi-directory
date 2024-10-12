# IncludedFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actually_included** | **List[str]** |  | [optional] 
**excluded** | **List[str]** |  | [optional] 
**included** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.included_fields import IncludedFields

# TODO update the JSON string below
json = "{}"
# create an instance of IncludedFields from a JSON string
included_fields_instance = IncludedFields.from_json(json)
# print the JSON string representation of the object
print(IncludedFields.to_json())

# convert the object into a dict
included_fields_dict = included_fields_instance.to_dict()
# create an instance of IncludedFields from a dict
included_fields_from_dict = IncludedFields.from_dict(included_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



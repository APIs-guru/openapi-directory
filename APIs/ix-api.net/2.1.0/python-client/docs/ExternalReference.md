# ExternalReference


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_ref** | **str** | Reference field, free to use for the API user. | [optional] 

## Example

```python
from openapi_client.models.external_reference import ExternalReference

# TODO update the JSON string below
json = "{}"
# create an instance of ExternalReference from a JSON string
external_reference_instance = ExternalReference.from_json(json)
# print the JSON string representation of the object
print(ExternalReference.to_json())

# convert the object into a dict
external_reference_dict = external_reference_instance.to_dict()
# create an instance of ExternalReference from a dict
external_reference_from_dict = ExternalReference.from_dict(external_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



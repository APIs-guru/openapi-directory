# Certificate

SSL certificate for an app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Certificate resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**location** | **str** | Resource Location. | 
**name** | **str** | Resource Name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.certificate import Certificate

# TODO update the JSON string below
json = "{}"
# create an instance of Certificate from a JSON string
certificate_instance = Certificate.from_json(json)
# print the JSON string representation of the object
print(Certificate.to_json())

# convert the object into a dict
certificate_dict = certificate_instance.to_dict()
# create an instance of Certificate from a dict
certificate_from_dict = Certificate.from_dict(certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PublicCertificate

Public certificate object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | PublicCertificate resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.public_certificate import PublicCertificate

# TODO update the JSON string below
json = "{}"
# create an instance of PublicCertificate from a JSON string
public_certificate_instance = PublicCertificate.from_json(json)
# print the JSON string representation of the object
print(PublicCertificate.to_json())

# convert the object into a dict
public_certificate_dict = public_certificate_instance.to_dict()
# create an instance of PublicCertificate from a dict
public_certificate_from_dict = PublicCertificate.from_dict(public_certificate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# EICResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**correlation_id** | **str** | The correlationId as passed in the request | 
**eic** | [**List[DisplayMarkUp]**](DisplayMarkUp.md) | Hierarchical list of objects for rendering EIC statement and Terms and Conditions | 
**plan** | [**Plan**](Plan.md) |  | 
**version** | **str** | Version of the API on which the EIC request took place. This value should be reported with any issue raised. | 

## Example

```python
from openapi_client.models.eic_response import EICResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EICResponse from a JSON string
eic_response_instance = EICResponse.from_json(json)
# print the JSON string representation of the object
print(EICResponse.to_json())

# convert the object into a dict
eic_response_dict = eic_response_instance.to_dict()
# create an instance of EICResponse from a dict
eic_response_from_dict = EICResponse.from_dict(eic_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



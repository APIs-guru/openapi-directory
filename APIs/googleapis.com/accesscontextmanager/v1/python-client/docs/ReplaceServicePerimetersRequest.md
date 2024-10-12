# ReplaceServicePerimetersRequest

A request to replace all existing Service Perimeters in an Access Policy with the Service Perimeters provided. This is done atomically.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Optional. The etag for the version of the Access Policy that this replace operation is to be performed on. If, at the time of replace, the etag for the Access Policy stored in Access Context Manager is different from the specified etag, then the replace operation will not be performed and the call will fail. This field is not required. If etag is not provided, the operation will be performed as if a valid etag is provided. | [optional] 
**service_perimeters** | [**List[ServicePerimeter]**](ServicePerimeter.md) | Required. The desired Service Perimeters that should replace all existing Service Perimeters in the Access Policy. | [optional] 

## Example

```python
from openapi_client.models.replace_service_perimeters_request import ReplaceServicePerimetersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceServicePerimetersRequest from a JSON string
replace_service_perimeters_request_instance = ReplaceServicePerimetersRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceServicePerimetersRequest.to_json())

# convert the object into a dict
replace_service_perimeters_request_dict = replace_service_perimeters_request_instance.to_dict()
# create an instance of ReplaceServicePerimetersRequest from a dict
replace_service_perimeters_request_from_dict = ReplaceServicePerimetersRequest.from_dict(replace_service_perimeters_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



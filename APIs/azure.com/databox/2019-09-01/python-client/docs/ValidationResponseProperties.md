# ValidationResponseProperties

Properties of pre job creation validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**individual_response_details** | [**List[ValidationInputResponse]**](ValidationInputResponse.md) | List of response details contain validationType and its response as key and value respectively. | [optional] [readonly] 
**status** | **str** | Overall validation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.validation_response_properties import ValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ValidationResponseProperties from a JSON string
validation_response_properties_instance = ValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(ValidationResponseProperties.to_json())

# convert the object into a dict
validation_response_properties_dict = validation_response_properties_instance.to_dict()
# create an instance of ValidationResponseProperties from a dict
validation_response_properties_from_dict = ValidationResponseProperties.from_dict(validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



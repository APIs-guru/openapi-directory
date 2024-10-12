# DataDestinationDetailsValidationResponseProperties

Properties of data destination details validation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **str** | Data destination details validation status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.data_destination_details_validation_response_properties import DataDestinationDetailsValidationResponseProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DataDestinationDetailsValidationResponseProperties from a JSON string
data_destination_details_validation_response_properties_instance = DataDestinationDetailsValidationResponseProperties.from_json(json)
# print the JSON string representation of the object
print(DataDestinationDetailsValidationResponseProperties.to_json())

# convert the object into a dict
data_destination_details_validation_response_properties_dict = data_destination_details_validation_response_properties_instance.to_dict()
# create an instance of DataDestinationDetailsValidationResponseProperties from a dict
data_destination_details_validation_response_properties_from_dict = DataDestinationDetailsValidationResponseProperties.from_dict(data_destination_details_validation_response_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



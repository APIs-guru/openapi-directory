# DataDestinationDetailsValidationRequest

Request to validate data destination details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_account_details** | [**List[DestinationAccountDetails]**](DestinationAccountDetails.md) | Destination account details list. | 
**location** | **str** | Location of stamp or geo. | 

## Example

```python
from openapi_client.models.data_destination_details_validation_request import DataDestinationDetailsValidationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DataDestinationDetailsValidationRequest from a JSON string
data_destination_details_validation_request_instance = DataDestinationDetailsValidationRequest.from_json(json)
# print the JSON string representation of the object
print(DataDestinationDetailsValidationRequest.to_json())

# convert the object into a dict
data_destination_details_validation_request_dict = data_destination_details_validation_request_instance.to_dict()
# create an instance of DataDestinationDetailsValidationRequest from a dict
data_destination_details_validation_request_from_dict = DataDestinationDetailsValidationRequest.from_dict(data_destination_details_validation_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# ProductStatusDestinationStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_countries** | **List[str]** | List of country codes (ISO 3166-1 alpha-2) where the offer is approved. | [optional] 
**destination** | **str** | The name of the destination | [optional] 
**disapproved_countries** | **List[str]** | List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved. | [optional] 
**pending_countries** | **List[str]** | List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval. | [optional] 
**status** | **str** | Deprecated. Destination approval status in &#x60;targetCountry&#x60; of the offer. | [optional] 

## Example

```python
from openapi_client.models.product_status_destination_status import ProductStatusDestinationStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatusDestinationStatus from a JSON string
product_status_destination_status_instance = ProductStatusDestinationStatus.from_json(json)
# print the JSON string representation of the object
print(ProductStatusDestinationStatus.to_json())

# convert the object into a dict
product_status_destination_status_dict = product_status_destination_status_instance.to_dict()
# create an instance of ProductStatusDestinationStatus from a dict
product_status_destination_status_from_dict = ProductStatusDestinationStatus.from_dict(product_status_destination_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



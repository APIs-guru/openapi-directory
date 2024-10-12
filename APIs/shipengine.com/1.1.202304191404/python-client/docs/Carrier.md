# Carrier

A carrier object that represents a provider such as UPS, USPS, DHL, etc that has been tied to the current account. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | The account number that the carrier is connected to. | [optional] [readonly] 
**balance** | **float** | Current available balance | [optional] [readonly] 
**carrier_code** | **str** | A string that uniquely identifies the carrier. | [optional] 
**carrier_id** | **str** | A string that uniquely identifies the carrier. | [optional] [readonly] 
**friendly_name** | **str** | Screen readable name | [optional] [readonly] 
**has_multi_package_supporting_services** | **bool** | Carrier supports multiple packages per shipment | [optional] [readonly] 
**nickname** | **str** | Nickname given to the account when initially setting up the carrier. | [optional] [readonly] 
**options** | [**List[CarrierAdvancedOption]**](CarrierAdvancedOption.md) | A list of options that are available to that carrier | [optional] [readonly] 
**packages** | [**List[PackageType]**](PackageType.md) | A list of package types that are supported by the carrier | [optional] [readonly] 
**primary** | **bool** | Is this the primary carrier that is used by default when no carrier is specified in label/shipment creation | [optional] [readonly] 
**requires_funded_amount** | **bool** | Indicates whether the carrier requires funding to use its services | [optional] [readonly] 
**services** | [**List[Service]**](Service.md) | A list of services that are offered by the carrier | [optional] [readonly] 
**supports_label_messages** | **bool** | The carrier supports adding custom label messages to an order. | [optional] [readonly] 

## Example

```python
from openapi_client.models.carrier import Carrier

# TODO update the JSON string below
json = "{}"
# create an instance of Carrier from a JSON string
carrier_instance = Carrier.from_json(json)
# print the JSON string representation of the object
print(Carrier.to_json())

# convert the object into a dict
carrier_dict = carrier_instance.to_dict()
# create an instance of Carrier from a dict
carrier_from_dict = Carrier.from_dict(carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



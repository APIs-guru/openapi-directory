# MobileCarrier

Contains information about a mobile carrier that can be targeted by ads.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_code** | **str** | Country code of the country to which this mobile carrier belongs. | [optional] 
**country_dart_id** | **str** | DART ID of the country to which this mobile carrier belongs. | [optional] 
**id** | **str** | ID of this mobile carrier. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#mobileCarrier\&quot;. | [optional] 
**name** | **str** | Name of this mobile carrier. | [optional] 

## Example

```python
from openapi_client.models.mobile_carrier import MobileCarrier

# TODO update the JSON string below
json = "{}"
# create an instance of MobileCarrier from a JSON string
mobile_carrier_instance = MobileCarrier.from_json(json)
# print the JSON string representation of the object
print(MobileCarrier.to_json())

# convert the object into a dict
mobile_carrier_dict = mobile_carrier_instance.to_dict()
# create an instance of MobileCarrier from a dict
mobile_carrier_from_dict = MobileCarrier.from_dict(mobile_carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



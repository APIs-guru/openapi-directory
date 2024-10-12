# V3StopAccessibility


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**audio_customer_information** | **bool** | Indicates if there is at least one audio customer information at the stop/platform | [optional] 
**escalator** | **bool** | Indicates if there is at least one accessible escalator at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) | [optional] 
**hearing_loop** | **bool** | Indicates if there is a hearing loop facility at the stop/platform | [optional] 
**lift** | **bool** | Indicates if there is an elevator at the stop/platform | [optional] 
**lighting** | **bool** | Indicates if there is lighting at the stop | [optional] 
**platform_number** | **int** | Indicates the platform number for xivic information (Platform 0 indicates general stop facilities) | [optional] 
**stairs** | **bool** | Indicates if there are stairs available in the stop | [optional] 
**stop_accessible** | **bool** | Indicates if the stop is accessible | [optional] 
**tactile_ground_surface_indicator** | **bool** | Indicates if there are tactile tiles (also known as tactile ground surface indicators, or TGSIs) at the stop | [optional] 
**waiting_room** | **bool** | Indicates if there is a general waiting area at the stop | [optional] 
**wheelchair** | [**V3StopAccessibilityWheelchair**](V3StopAccessibilityWheelchair.md) |  | [optional] 

## Example

```python
from openapi_client.models.v3_stop_accessibility import V3StopAccessibility

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopAccessibility from a JSON string
v3_stop_accessibility_instance = V3StopAccessibility.from_json(json)
# print the JSON string representation of the object
print(V3StopAccessibility.to_json())

# convert the object into a dict
v3_stop_accessibility_dict = v3_stop_accessibility_instance.to_dict()
# create an instance of V3StopAccessibility from a dict
v3_stop_accessibility_from_dict = V3StopAccessibility.from_dict(v3_stop_accessibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



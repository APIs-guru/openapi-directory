# V3StopAccessibilityWheelchair


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessible_ramp** | **bool** |  | [optional] 
**low_ticket_counter** | **bool** | Indicates if there is at least one low ticket counter at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) | [optional] 
**manouvering** | **bool** | Indicates if there is a space for mobility device to board on or off a transport mode | [optional] 
**parking** | **bool** | Indicates if there is at least one accessible parking spot at the stop that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) | [optional] 
**raised_platform** | **bool** | Indicates if there is a raised platform to board a train | [optional] 
**raised_platform_shelther** | **bool** | Indicates if there is shelter near the raised platform | [optional] 
**ramp** | **bool** | Indicates if there are ramps (&amp;lt;1:14) at the stop/platform | [optional] 
**secondary_path** | **bool** | Indicates if there is a path beyond the stop which is accessible | [optional] 
**steep_ramp** | **bool** | Indicates if there are ramps (&amp;gt;1:14) at the stop/platform | [optional] 
**telephone** | **bool** | Indicates if there is at least one accessible telephone at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) | [optional] 
**toilet** | **bool** | Indicates if there is at least one accessible toilet at the stop/platform that complies with the Disability Standards for Accessible Public Transport under the Disability Discrimination Act (1992) | [optional] 

## Example

```python
from openapi_client.models.v3_stop_accessibility_wheelchair import V3StopAccessibilityWheelchair

# TODO update the JSON string below
json = "{}"
# create an instance of V3StopAccessibilityWheelchair from a JSON string
v3_stop_accessibility_wheelchair_instance = V3StopAccessibilityWheelchair.from_json(json)
# print the JSON string representation of the object
print(V3StopAccessibilityWheelchair.to_json())

# convert the object into a dict
v3_stop_accessibility_wheelchair_dict = v3_stop_accessibility_wheelchair_instance.to_dict()
# create an instance of V3StopAccessibilityWheelchair from a dict
v3_stop_accessibility_wheelchair_from_dict = V3StopAccessibilityWheelchair.from_dict(v3_stop_accessibility_wheelchair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



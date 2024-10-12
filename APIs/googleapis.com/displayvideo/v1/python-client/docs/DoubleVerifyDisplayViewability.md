# DoubleVerifyDisplayViewability

Details of DoubleVerify display viewability settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iab** | **str** | Target web and app inventory to maximize IAB viewable rate. | [optional] 
**viewable_during** | **str** | Target web and app inventory to maximize 100% viewable duration. | [optional] 

## Example

```python
from openapi_client.models.double_verify_display_viewability import DoubleVerifyDisplayViewability

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerifyDisplayViewability from a JSON string
double_verify_display_viewability_instance = DoubleVerifyDisplayViewability.from_json(json)
# print the JSON string representation of the object
print(DoubleVerifyDisplayViewability.to_json())

# convert the object into a dict
double_verify_display_viewability_dict = double_verify_display_viewability_instance.to_dict()
# create an instance of DoubleVerifyDisplayViewability from a dict
double_verify_display_viewability_from_dict = DoubleVerifyDisplayViewability.from_dict(double_verify_display_viewability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



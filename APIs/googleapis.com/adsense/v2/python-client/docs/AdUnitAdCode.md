# AdUnitAdCode

Representation of the ad unit code for a given ad unit. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634) and [Where to place the ad code in your HTML](https://support.google.com/adsense/answer/9190028).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_code** | **str** | Output only. The code snippet to add to the body of an HTML page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ad_unit_ad_code import AdUnitAdCode

# TODO update the JSON string below
json = "{}"
# create an instance of AdUnitAdCode from a JSON string
ad_unit_ad_code_instance = AdUnitAdCode.from_json(json)
# print the JSON string representation of the object
print(AdUnitAdCode.to_json())

# convert the object into a dict
ad_unit_ad_code_dict = ad_unit_ad_code_instance.to_dict()
# create an instance of AdUnitAdCode from a dict
ad_unit_ad_code_from_dict = AdUnitAdCode.from_dict(ad_unit_ad_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



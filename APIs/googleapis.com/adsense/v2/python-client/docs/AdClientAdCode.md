# AdClientAdCode

Representation of the AdSense code for a given ad client. For more information, see [About the AdSense code](https://support.google.com/adsense/answer/9274634).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_code** | **str** | Output only. The AdSense code snippet to add to the head of an HTML page. | [optional] [readonly] 
**amp_body** | **str** | Output only. The AdSense code snippet to add to the body of an AMP page. | [optional] [readonly] 
**amp_head** | **str** | Output only. The AdSense code snippet to add to the head of an AMP page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.ad_client_ad_code import AdClientAdCode

# TODO update the JSON string below
json = "{}"
# create an instance of AdClientAdCode from a JSON string
ad_client_ad_code_instance = AdClientAdCode.from_json(json)
# print the JSON string representation of the object
print(AdClientAdCode.to_json())

# convert the object into a dict
ad_client_ad_code_dict = ad_client_ad_code_instance.to_dict()
# create an instance of AdClientAdCode from a dict
ad_client_ad_code_from_dict = AdClientAdCode.from_dict(ad_client_ad_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_code** | **str** | The Auto ad code snippet. The ad code snippet. | [optional] 
**amp_body** | **str** | The AMP Auto ad code snippet that goes in the body of an AMP page. | [optional] 
**amp_head** | **str** | The AMP Auto ad code snippet that goes in the head of an AMP page. | [optional] 
**kind** | **str** | Kind this is, in this case adsense#adCode. | [optional] [default to 'adsense#adCode']

## Example

```python
from openapi_client.models.ad_code import AdCode

# TODO update the JSON string below
json = "{}"
# create an instance of AdCode from a JSON string
ad_code_instance = AdCode.from_json(json)
# print the JSON string representation of the object
print(AdCode.to_json())

# convert the object into a dict
ad_code_dict = ad_code_instance.to_dict()
# create an instance of AdCode from a dict
ad_code_from_dict = AdCode.from_dict(ad_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



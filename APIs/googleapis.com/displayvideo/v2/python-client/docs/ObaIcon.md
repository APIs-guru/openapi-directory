# ObaIcon

OBA Icon for a Creative

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**click_tracking_url** | **str** | Required. The click tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com | [optional] 
**dimensions** | [**Dimensions**](Dimensions.md) |  | [optional] 
**landing_page_url** | **str** | Required. The landing page URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com | [optional] 
**position** | **str** | The position of the OBA icon on the creative. | [optional] 
**program** | **str** | The program of the OBA icon. For example: “AdChoices”. | [optional] 
**resource_mime_type** | **str** | The MIME type of the OBA icon resource. | [optional] 
**resource_url** | **str** | The URL of the OBA icon resource. | [optional] 
**view_tracking_url** | **str** | Required. The view tracking URL of the OBA icon. Only URLs of the following domains are allowed: * https://info.evidon.com * https://l.betrad.com | [optional] 

## Example

```python
from openapi_client.models.oba_icon import ObaIcon

# TODO update the JSON string below
json = "{}"
# create an instance of ObaIcon from a JSON string
oba_icon_instance = ObaIcon.from_json(json)
# print the JSON string representation of the object
print(ObaIcon.to_json())

# convert the object into a dict
oba_icon_dict = oba_icon_instance.to_dict()
# create an instance of ObaIcon from a dict
oba_icon_from_dict = ObaIcon.from_dict(oba_icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# PricesheetDownloadResponse

Download response of Pricesheets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DownloadUrl**](DownloadUrl.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.pricesheet_download_response import PricesheetDownloadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PricesheetDownloadResponse from a JSON string
pricesheet_download_response_instance = PricesheetDownloadResponse.from_json(json)
# print the JSON string representation of the object
print(PricesheetDownloadResponse.to_json())

# convert the object into a dict
pricesheet_download_response_dict = pricesheet_download_response_instance.to_dict()
# create an instance of PricesheetDownloadResponse from a dict
pricesheet_download_response_from_dict = PricesheetDownloadResponse.from_dict(pricesheet_download_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



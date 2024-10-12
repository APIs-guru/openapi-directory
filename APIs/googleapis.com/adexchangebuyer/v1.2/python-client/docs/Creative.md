# Creative

A creative and its classification data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**html_snippet** | **str** | The HTML snippet that displays the ad when inserted in the web page. If set, videoURL should not be set. | [optional] 
**account_id** | **int** | Account id. | [optional] 
**advertiser_id** | **List[str]** | Detected advertiser id, if any. Read-only. This field should not be set in requests. | [optional] 
**advertiser_name** | **str** | The name of the company being advertised in the creative. | [optional] 
**agency_id** | **str** | The agency id for this creative. | [optional] 
**api_upload_timestamp** | **datetime** | The last upload timestamp of this creative if it was uploaded via API. Read-only. The value of this field is generated, and will be ignored for uploads. (formatted RFC 3339 timestamp). | [optional] 
**attribute** | **List[int]** | All attributes for the ads that may be shown from this snippet. | [optional] 
**buyer_creative_id** | **str** | A buyer-specific id identifying the creative in this ad. | [optional] 
**click_through_url** | **List[str]** | The set of destination urls for the snippet. | [optional] 
**corrections** | [**List[CreativeCorrectionsInner]**](CreativeCorrectionsInner.md) | Shows any corrections that were applied to this creative. Read-only. This field should not be set in requests. | [optional] 
**disapproval_reasons** | [**List[CreativeDisapprovalReasonsInner]**](CreativeDisapprovalReasonsInner.md) | The reasons for disapproval, if any. Note that not all disapproval reasons may be categorized, so it is possible for the creative to have a status of DISAPPROVED with an empty list for disapproval_reasons. In this case, please reach out to your TAM to help debug the issue. Read-only. This field should not be set in requests. | [optional] 
**filtering_reasons** | [**CreativeFilteringReasons**](CreativeFilteringReasons.md) |  | [optional] 
**height** | **int** | Ad height. | [optional] 
**impression_tracking_url** | **List[str]** | The set of urls to be called to record an impression. | [optional] 
**kind** | **str** | Resource type. | [optional] [default to 'adexchangebuyer#creative']
**product_categories** | **List[int]** | Detected product categories, if any. Read-only. This field should not be set in requests. | [optional] 
**restricted_categories** | **List[int]** | All restricted categories for the ads that may be shown from this snippet. | [optional] 
**sensitive_categories** | **List[int]** | Detected sensitive categories, if any. Read-only. This field should not be set in requests. | [optional] 
**status** | **str** | Creative serving status. Read-only. This field should not be set in requests. | [optional] 
**vendor_type** | **List[int]** | All vendor types for the ads that may be shown from this snippet. | [optional] 
**version** | **int** | The version for this creative. Read-only. This field should not be set in requests. | [optional] 
**video_url** | **str** | The url to fetch a video ad. If set, HTMLSnippet should not be set. | [optional] 
**width** | **int** | Ad width. | [optional] 

## Example

```python
from openapi_client.models.creative import Creative

# TODO update the JSON string below
json = "{}"
# create an instance of Creative from a JSON string
creative_instance = Creative.from_json(json)
# print the JSON string representation of the object
print(Creative.to_json())

# convert the object into a dict
creative_dict = creative_instance.to_dict()
# create an instance of Creative from a dict
creative_from_dict = Creative.from_dict(creative_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



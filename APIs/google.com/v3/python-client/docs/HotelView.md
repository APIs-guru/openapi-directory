# HotelView

A hotel view.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_issue_detail** | [**List[DataIssueDetail]**](DataIssueDetail.md) | The type and severity of each data quality issue in the feed. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article. | [optional] 
**data_issues** | **List[str]** | DEPRECATED. Indicates that the hotel has data quality issues. The value of this field indicates the type of error. This has been replaced with the data_issue_detail field. If your feed contains data issues, update the feed and resubmit it. For more information, refer to this article. | [optional] 
**google_cluster_id** | **str** | The Google Maps identifier for the hotel. | [optional] 
**google_hotel_display_name** | **str** | Google&#39;s hotel name. | [optional] 
**google_hotel_id** | **str** | Google&#39;s canonical ID for the hotel. | [optional] 
**live_on_google** | **bool** | Optional. Whether the hotel appears in Google&#39;s hotel booking links. Declaration &amp; behavior to get detection of presence/absence in JSON conversion. | [optional] 
**match_status** | **str** | Current matching status of the hotel. | [optional] 
**overclustered_partner_hotel_ids** | **List[str]** | Other hotels with which the hotel is overclustered. If your feed contains overclustered hotels, update the feed and resubmit it. To do this, you can use the manual match tool. | [optional] 
**partner_hotel_display_name** | **str** | Partner&#39;s hotel name. | [optional] 
**partner_hotel_id** | **str** | The unique ID of the hotel that the partner provides in their Hotel List Feed. | [optional] 
**primary_overclustered_partner_hotel_id** | **str** | The primary hotel in the overclustered set. | [optional] 
**property_details** | **str** | Optional. A URL to the property on Google. Only available for properties that are listed. | [optional] 

## Example

```python
from openapi_client.models.hotel_view import HotelView

# TODO update the JSON string below
json = "{}"
# create an instance of HotelView from a JSON string
hotel_view_instance = HotelView.from_json(json)
# print the JSON string representation of the object
print(HotelView.to_json())

# convert the object into a dict
hotel_view_dict = hotel_view_instance.to_dict()
# create an instance of HotelView from a dict
hotel_view_from_dict = HotelView.from_dict(hotel_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



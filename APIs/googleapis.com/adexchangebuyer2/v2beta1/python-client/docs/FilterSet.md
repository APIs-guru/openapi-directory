# FilterSet

A set of filters that is applied to a request for data. Within a filter set, an AND operation is performed across the filters represented by each field. An OR operation is performed across the filters represented by the multiple values of a repeated field, for example, \"format=VIDEO AND deal_id=12 AND (seller_network_id=34 OR seller_network_id=56)\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**absolute_date_range** | [**AbsoluteDateRange**](AbsoluteDateRange.md) |  | [optional] 
**breakdown_dimensions** | **List[str]** | The set of dimensions along which to break down the response; may be empty. If multiple dimensions are requested, the breakdown is along the Cartesian product of the requested dimensions. | [optional] 
**creative_id** | **str** | The ID of the creative on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the &#x60;bidders/*/accounts/*/filterSets/*&#x60; pattern. | [optional] 
**deal_id** | **str** | The ID of the deal on which to filter; optional. This field may be set only for a filter set that accesses account-level troubleshooting data, for example, one whose name matches the &#x60;bidders/*/accounts/*/filterSets/*&#x60; pattern. | [optional] 
**environment** | **str** | The environment on which to filter; optional. | [optional] 
**format** | **str** | Creative format bidded on or allowed to bid on, can be empty. | [optional] 
**formats** | **List[str]** | Creative formats bidded on or allowed to bid on, can be empty. Although this field is a list, it can only be populated with a single item. A HTTP 400 bad request error will be returned in the response if you specify multiple items. | [optional] 
**name** | **str** | A user-defined name of the filter set. Filter set names must be unique globally and match one of the patterns: - &#x60;bidders/*/filterSets/*&#x60; (for accessing bidder-level troubleshooting data) - &#x60;bidders/*/accounts/*/filterSets/*&#x60; (for accessing account-level troubleshooting data) This field is required in create operations. | [optional] 
**platforms** | **List[str]** | The list of platforms on which to filter; may be empty. The filters represented by multiple platforms are ORed together (for example, if non-empty, results must match any one of the platforms). | [optional] 
**publisher_identifiers** | **List[str]** | For Open Bidding partners only. The list of publisher identifiers on which to filter; may be empty. The filters represented by multiple publisher identifiers are ORed together. | [optional] 
**realtime_time_range** | [**RealtimeTimeRange**](RealtimeTimeRange.md) |  | [optional] 
**relative_date_range** | [**RelativeDateRange**](RelativeDateRange.md) |  | [optional] 
**seller_network_ids** | **List[int]** | For Authorized Buyers only. The list of IDs of the seller (publisher) networks on which to filter; may be empty. The filters represented by multiple seller network IDs are ORed together (for example, if non-empty, results must match any one of the publisher networks). See [seller-network-ids](https://developers.google.com/authorized-buyers/rtb/downloads/seller-network-ids) file for the set of existing seller network IDs. | [optional] 
**time_series_granularity** | **str** | The granularity of time intervals if a time series breakdown is preferred; optional. | [optional] 

## Example

```python
from openapi_client.models.filter_set import FilterSet

# TODO update the JSON string below
json = "{}"
# create an instance of FilterSet from a JSON string
filter_set_instance = FilterSet.from_json(json)
# print the JSON string representation of the object
print(FilterSet.to_json())

# convert the object into a dict
filter_set_dict = filter_set_instance.to_dict()
# create an instance of FilterSet from a dict
filter_set_from_dict = FilterSet.from_dict(filter_set_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



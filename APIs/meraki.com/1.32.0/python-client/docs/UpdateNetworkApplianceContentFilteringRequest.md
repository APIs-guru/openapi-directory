# UpdateNetworkApplianceContentFilteringRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_url_patterns** | **List[str]** | A list of URL patterns that are allowed | [optional] 
**blocked_url_categories** | **List[str]** | A list of URL categories to block | [optional] 
**blocked_url_patterns** | **List[str]** | A list of URL patterns that are blocked | [optional] 
**url_category_list_size** | **str** | URL category list size which is either &#39;topSites&#39; or &#39;fullList&#39; | [optional] 

## Example

```python
from openapi_client.models.update_network_appliance_content_filtering_request import UpdateNetworkApplianceContentFilteringRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkApplianceContentFilteringRequest from a JSON string
update_network_appliance_content_filtering_request_instance = UpdateNetworkApplianceContentFilteringRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkApplianceContentFilteringRequest.to_json())

# convert the object into a dict
update_network_appliance_content_filtering_request_dict = update_network_appliance_content_filtering_request_instance.to_dict()
# create an instance of UpdateNetworkApplianceContentFilteringRequest from a dict
update_network_appliance_content_filtering_request_from_dict = UpdateNetworkApplianceContentFilteringRequest.from_dict(update_network_appliance_content_filtering_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# AdGroupPagedCollectionResponse

A container for the details of a paged collection of ad groups.<br /><br /><span class=\"tablenote\"><b>Note:</b> This type only applies to the Cost Per Click (CPC) funding model; it does not apply to the Cost Per Sale (CPS) funding model.</span>

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_groups** | [**List[AdGroup]**](AdGroup.md) | The details of existing ad groups, such as the name, ID, and status of the ad groups. | [optional] 
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the &lt;b&gt;limit&lt;/b&gt; query parameter. | [optional] 
**next** | **str** | The call URI that can be used to retrieve the next page in the result set. This value is returned only if there is an additional page of results to display from the result set. | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter. &lt;p&gt;&lt;b&gt;Default:&lt;/b&gt; 0&lt;/p&gt;&lt;br&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;The items in a paginated result set use a zero-based list, where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 
**prev** | **str** | The call URI that can be used to retrieve the previous page in the result set. Basically, all of the request parameters will remain the same except the offset value, which will be decreased to retrieve the previous page of results. | [optional] 
**total** | **int** | The total number of items retrieved in the result set.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note: &lt;/b&gt;If no items are found, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.ad_group_paged_collection_response import AdGroupPagedCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AdGroupPagedCollectionResponse from a JSON string
ad_group_paged_collection_response_instance = AdGroupPagedCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(AdGroupPagedCollectionResponse.to_json())

# convert the object into a dict
ad_group_paged_collection_response_dict = ad_group_paged_collection_response_instance.to_dict()
# create an instance of AdGroupPagedCollectionResponse from a dict
ad_group_paged_collection_response_from_dict = AdGroupPagedCollectionResponse.from_dict(ad_group_paged_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



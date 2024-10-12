# DeleteAdResponse

This type defines the fields returned in a delete-ad response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ad_id** | **str** | The unique identifier of the ad that was deleted, or the ad that the seller attempted to delete. | [optional] 
**errors** | [**List[Error]**](Error.md) | An array of the errors or warnings associated with the request. | [optional] 
**listing_id** | **str** | A unique eBay-assigned ID for a listing that is generated when the listing is created. | [optional] 
**status_code** | **int** | An HTTP status code that indicates the response-status of the request. Check this code to see if the ad was successfully deleted.&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;b&gt;Note:&lt;/b&gt;A status code is returned for each ad that the seller deletes, or attempts to delete.&lt;/span&gt; | [optional] 

## Example

```python
from openapi_client.models.delete_ad_response import DeleteAdResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteAdResponse from a JSON string
delete_ad_response_instance = DeleteAdResponse.from_json(json)
# print the JSON string representation of the object
print(DeleteAdResponse.to_json())

# convert the object into a dict
delete_ad_response_dict = delete_ad_response_instance.to_dict()
# create an instance of DeleteAdResponse from a dict
delete_ad_response_from_dict = DeleteAdResponse.from_dict(delete_ad_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



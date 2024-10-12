# ApkListingsListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;androidpublisher#apkListingsListResponse\&quot;. | [optional] [default to 'androidpublisher#apkListingsListResponse']
**listings** | [**List[ApkListing]**](ApkListing.md) |  | [optional] 

## Example

```python
from openapi_client.models.apk_listings_list_response import ApkListingsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApkListingsListResponse from a JSON string
apk_listings_list_response_instance = ApkListingsListResponse.from_json(json)
# print the JSON string representation of the object
print(ApkListingsListResponse.to_json())

# convert the object into a dict
apk_listings_list_response_dict = apk_listings_list_response_instance.to_dict()
# create an instance of ApkListingsListResponse from a dict
apk_listings_list_response_from_dict = ApkListingsListResponse.from_dict(apk_listings_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



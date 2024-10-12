# PostPamAssetsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | Codes of the PAM asset categories in which the asset is classified | [optional] 
**code** | **str** | PAM asset code | 
**description** | **str** | Description of the PAM asset | [optional] 
**end_of_use** | **str** | Date on which the PAM asset expire | [optional] 
**localizable** | **bool** | Whether the asset is localized or not, meaning if you want to have different reference files for each of your locale | [optional] [default to False]
**reference_files** | [**List[PAMAssetsAllOfEmbeddedItemsInnerAllOfReferenceFilesInner]**](PAMAssetsAllOfEmbeddedItemsInnerAllOfReferenceFilesInner.md) | Reference files of the PAM asset | [optional] 
**tags** | **List[str]** | Tags of the PAM asset | [optional] 
**variation_files** | [**List[PAMAssetsAllOfEmbeddedItemsInnerAllOfVariationFilesInner]**](PAMAssetsAllOfEmbeddedItemsInnerAllOfVariationFilesInner.md) | Variations of the PAM asset | [optional] 

## Example

```python
from openapi_client.models.post_pam_assets_request import PostPamAssetsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PostPamAssetsRequest from a JSON string
post_pam_assets_request_instance = PostPamAssetsRequest.from_json(json)
# print the JSON string representation of the object
print(PostPamAssetsRequest.to_json())

# convert the object into a dict
post_pam_assets_request_dict = post_pam_assets_request_instance.to_dict()
# create an instance of PostPamAssetsRequest from a dict
post_pam_assets_request_from_dict = PostPamAssetsRequest.from_dict(post_pam_assets_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



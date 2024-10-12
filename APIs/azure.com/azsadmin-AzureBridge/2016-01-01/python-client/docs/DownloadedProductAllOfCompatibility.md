# DownloadedProductAllOfCompatibility

Product compatibility

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Full error message if any compatibility issues are found | [optional] 
**is_compatible** | **bool** | Tells if product is compatible with current device | [optional] 
**issues** | **List[str]** | List of all issues found | [optional] 
**message** | **str** | Short error message if any compatibility issues are found | [optional] 

## Example

```python
from openapi_client.models.downloaded_product_all_of_compatibility import DownloadedProductAllOfCompatibility

# TODO update the JSON string below
json = "{}"
# create an instance of DownloadedProductAllOfCompatibility from a JSON string
downloaded_product_all_of_compatibility_instance = DownloadedProductAllOfCompatibility.from_json(json)
# print the JSON string representation of the object
print(DownloadedProductAllOfCompatibility.to_json())

# convert the object into a dict
downloaded_product_all_of_compatibility_dict = downloaded_product_all_of_compatibility_instance.to_dict()
# create an instance of DownloadedProductAllOfCompatibility from a dict
downloaded_product_all_of_compatibility_from_dict = DownloadedProductAllOfCompatibility.from_dict(downloaded_product_all_of_compatibility_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



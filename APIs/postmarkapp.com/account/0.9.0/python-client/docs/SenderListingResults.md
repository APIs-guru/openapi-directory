# SenderListingResults



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sender_signatures** | [**List[SenderSignatureInformation]**](SenderSignatureInformation.md) |  | [optional] 
**total_count** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.sender_listing_results import SenderListingResults

# TODO update the JSON string below
json = "{}"
# create an instance of SenderListingResults from a JSON string
sender_listing_results_instance = SenderListingResults.from_json(json)
# print the JSON string representation of the object
print(SenderListingResults.to_json())

# convert the object into a dict
sender_listing_results_dict = sender_listing_results_instance.to_dict()
# create an instance of SenderListingResults from a dict
sender_listing_results_from_dict = SenderListingResults.from_dict(sender_listing_results_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



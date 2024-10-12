# StartPageToken


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;drive#startPageToken\&quot;&#x60;. | [optional] [default to 'drive#startPageToken']
**start_page_token** | **str** | The starting page token for listing future changes. The page token doesn&#39;t expire. | [optional] 

## Example

```python
from openapi_client.models.start_page_token import StartPageToken

# TODO update the JSON string below
json = "{}"
# create an instance of StartPageToken from a JSON string
start_page_token_instance = StartPageToken.from_json(json)
# print the JSON string representation of the object
print(StartPageToken.to_json())

# convert the object into a dict
start_page_token_dict = start_page_token_instance.to_dict()
# create an instance of StartPageToken from a dict
start_page_token_from_dict = StartPageToken.from_dict(start_page_token_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



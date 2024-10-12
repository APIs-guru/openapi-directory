# FacebookPage

A Facebook page for Facebook channel registration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | Facebook application access token. Value only returned through POST to the action Channel List API, otherwise empty. | 
**id** | **str** | Page id | 

## Example

```python
from openapi_client.models.facebook_page import FacebookPage

# TODO update the JSON string below
json = "{}"
# create an instance of FacebookPage from a JSON string
facebook_page_instance = FacebookPage.from_json(json)
# print the JSON string representation of the object
print(FacebookPage.to_json())

# convert the object into a dict
facebook_page_dict = facebook_page_instance.to_dict()
# create an instance of FacebookPage from a dict
facebook_page_from_dict = FacebookPage.from_dict(facebook_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



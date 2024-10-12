# Website


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **str** | Address | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.website import Website

# TODO update the JSON string below
json = "{}"
# create an instance of Website from a JSON string
website_instance = Website.from_json(json)
# print the JSON string representation of the object
print(Website.to_json())

# convert the object into a dict
website_dict = website_instance.to_dict()
# create an instance of Website from a dict
website_from_dict = Website.from_dict(website_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



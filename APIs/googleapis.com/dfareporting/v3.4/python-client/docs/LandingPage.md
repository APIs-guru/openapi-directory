# LandingPage

Contains information about where a user's browser is taken after the user clicks an ad.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advertiser_id** | **str** | Advertiser ID of this landing page. This is a required field. | [optional] 
**archived** | **bool** | Whether this landing page has been archived. | [optional] 
**deep_links** | [**List[DeepLink]**](DeepLink.md) | Links that will direct the user to a mobile app, if installed. | [optional] 
**id** | **str** | ID of this landing page. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#landingPage\&quot;. | [optional] 
**name** | **str** | Name of this landing page. This is a required field. It must be less than 256 characters long. | [optional] 
**url** | **str** | URL of this landing page. This is a required field. | [optional] 

## Example

```python
from openapi_client.models.landing_page import LandingPage

# TODO update the JSON string below
json = "{}"
# create an instance of LandingPage from a JSON string
landing_page_instance = LandingPage.from_json(json)
# print the JSON string representation of the object
print(LandingPage.to_json())

# convert the object into a dict
landing_page_dict = landing_page_instance.to_dict()
# create an instance of LandingPage from a dict
landing_page_from_dict = LandingPage.from_dict(landing_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



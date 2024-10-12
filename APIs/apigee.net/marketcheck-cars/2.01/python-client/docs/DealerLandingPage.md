# DealerLandingPage

Describes the dealer landing page (SRP) HTML object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crawled_at** | **float** | The timestamp indicating the time when the SRP was cached | [optional] 
**html** | **str** | The HTML string for the listing web page | [optional] 
**srp_url** | **str** | The URL of the SRP | [optional] 

## Example

```python
from openapi_client.models.dealer_landing_page import DealerLandingPage

# TODO update the JSON string below
json = "{}"
# create an instance of DealerLandingPage from a JSON string
dealer_landing_page_instance = DealerLandingPage.from_json(json)
# print the JSON string representation of the object
print(DealerLandingPage.to_json())

# convert the object into a dict
dealer_landing_page_dict = dealer_landing_page_instance.to_dict()
# create an instance of DealerLandingPage from a dict
dealer_landing_page_from_dict = DealerLandingPage.from_dict(dealer_landing_page_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



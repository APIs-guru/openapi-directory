# TrafficSource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**campaign** | **str** | The campaign that referred the customer to the checkout | [optional] 
**first_page_visited** | **str** | The first url visited by the customer | [optional] 
**first_page_visited_at** | **str** | The date when the customer visited the first page | [optional] 
**medium** | **str** | The medium that referred the customer to the checkout | [optional] 
**referral_code** | **str** | The code that referred the customer to the checkout | [optional] 
**referral_source** | **str** | The source that referred the customer to the website | [optional] 
**referral_url** | **str** | The website that referred the customer to the checkout | [optional] 
**source_name** | **str** | Where the checkout originated | [optional] 
**user_agent** | **str** | User agent of the referred request to checkout | [optional] 

## Example

```python
from openapi_client.models.traffic_source import TrafficSource

# TODO update the JSON string below
json = "{}"
# create an instance of TrafficSource from a JSON string
traffic_source_instance = TrafficSource.from_json(json)
# print the JSON string representation of the object
print(TrafficSource.to_json())

# convert the object into a dict
traffic_source_dict = traffic_source_instance.to_dict()
# create an instance of TrafficSource from a dict
traffic_source_from_dict = TrafficSource.from_dict(traffic_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



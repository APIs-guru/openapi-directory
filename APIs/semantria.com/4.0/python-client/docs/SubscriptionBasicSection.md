# SubscriptionBasicSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_response_limit** | **int** | Represents the maximum size of outgoing batch for auto-response feature | 
**batch_limit** | **int** | Represents the maximum size of the incoming batch in documents | 
**blacklist_limit** | **int** | Represents the maximum number of allowed blacklist items | 
**callback_batch_limit** | **int** | Represents the maximum size of outgoing batch for callback data retrieving mode | 
**categories_limit** | **int** | Represents the maximum number of allowed categories | 
**category_samples_limit** | **int** | Represents the maximum number of allowed category samples | 
**characters_limit** | **int** | Represents the maximum length of the document allowed for processing | 
**collection_limit** | **int** | Represents the maximum size of collection in documents | 
**configurations_limit** | **int** | Represents the maximum number of allowed configurations | 
**entities_limit** | **int** | Represents the maximum number of allowed entities | 
**output_data_limit** | **int** | Represent the maximum number allowed as output limit of configuration | 
**processed_batch_limit** | **int** | Represents the maximum size of outgoing batch for pulling data retrieving mode | 
**queries_limit** | **int** | Represents the maximum number of allowed queries | 
**return_source_text** | **bool** | Indicates whether responding of source text along with the analysis data is allowed or not | 
**sentiment_limit** | **int** | Represents the maximum number of allowed sentiment-bearing phrases | 

## Example

```python
from openapi_client.models.subscription_basic_section import SubscriptionBasicSection

# TODO update the JSON string below
json = "{}"
# create an instance of SubscriptionBasicSection from a JSON string
subscription_basic_section_instance = SubscriptionBasicSection.from_json(json)
# print the JSON string representation of the object
print(SubscriptionBasicSection.to_json())

# convert the object into a dict
subscription_basic_section_dict = subscription_basic_section_instance.to_dict()
# create an instance of SubscriptionBasicSection from a dict
subscription_basic_section_from_dict = SubscriptionBasicSection.from_dict(subscription_basic_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# TweetWithheld

Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyright** | **bool** | Indicates if the content is being withheld for on the basis of copyright infringement. | 
**country_codes** | **List[str]** | Provides a list of countries where this content is not available. | 
**scope** | **str** | Indicates whether the content being withheld is the &#x60;tweet&#x60; or a &#x60;user&#x60;. | [optional] 

## Example

```python
from openapi_client.models.tweet_withheld import TweetWithheld

# TODO update the JSON string below
json = "{}"
# create an instance of TweetWithheld from a JSON string
tweet_withheld_instance = TweetWithheld.from_json(json)
# print the JSON string representation of the object
print(TweetWithheld.to_json())

# convert the object into a dict
tweet_withheld_dict = tweet_withheld_instance.to_dict()
# create an instance of TweetWithheld from a dict
tweet_withheld_from_dict = TweetWithheld.from_dict(tweet_withheld_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



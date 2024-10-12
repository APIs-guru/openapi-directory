# Datafeed

Datafeed configuration data.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_language** | **str** | The two-letter ISO 639-1 language in which the attributes are defined in the data feed. | [optional] 
**content_type** | **str** | Required. The type of data feed. For product inventory feeds, only feeds for local stores, not online stores, are supported. Acceptable values are: - \&quot;&#x60;local products&#x60;\&quot; - \&quot;&#x60;product inventory&#x60;\&quot; - \&quot;&#x60;products&#x60;\&quot;  | [optional] 
**fetch_schedule** | [**DatafeedFetchSchedule**](DatafeedFetchSchedule.md) |  | [optional] 
**file_name** | **str** | Required. The filename of the feed. All feeds must have a unique file name. | [optional] 
**format** | [**DatafeedFormat**](DatafeedFormat.md) |  | [optional] 
**id** | **str** | Required for update. The ID of the data feed. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#datafeed&#x60;\&quot; | [optional] 
**name** | **str** | Required for insert. A descriptive name of the data feed. | [optional] 
**targets** | [**List[DatafeedTarget]**](DatafeedTarget.md) | The targets this feed should apply to (country, language, destinations). | [optional] 

## Example

```python
from openapi_client.models.datafeed import Datafeed

# TODO update the JSON string below
json = "{}"
# create an instance of Datafeed from a JSON string
datafeed_instance = Datafeed.from_json(json)
# print the JSON string representation of the object
print(Datafeed.to_json())

# convert the object into a dict
datafeed_dict = datafeed_instance.to_dict()
# create an instance of Datafeed from a dict
datafeed_from_dict = Datafeed.from_dict(datafeed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



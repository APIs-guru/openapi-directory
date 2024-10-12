# ConsumerInfo

`ConsumerInfo` provides information about the consumer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_number** | **str** | The consumer identity number, can be Google cloud project number, folder number or organization number e.g. 1234567890. A value of 0 indicates no consumer number is found. | [optional] 
**project_number** | **str** | The Google cloud project number, e.g. 1234567890. A value of 0 indicates no project number is found. NOTE: This field is deprecated after Chemist support flexible consumer id. New code should not depend on this field anymore. | [optional] 
**type** | **str** | The type of the consumer which should have been defined in [Google Resource Manager](https://cloud.google.com/resource-manager/). | [optional] 

## Example

```python
from openapi_client.models.consumer_info import ConsumerInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ConsumerInfo from a JSON string
consumer_info_instance = ConsumerInfo.from_json(json)
# print the JSON string representation of the object
print(ConsumerInfo.to_json())

# convert the object into a dict
consumer_info_dict = consumer_info_instance.to_dict()
# create an instance of ConsumerInfo from a dict
consumer_info_from_dict = ConsumerInfo.from_dict(consumer_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



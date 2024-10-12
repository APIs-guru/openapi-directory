# SparkConfiguration


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **Dict[str, str]** |  | [optional] 

## Example

```python
from openapi_client.models.spark_configuration import SparkConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of SparkConfiguration from a JSON string
spark_configuration_instance = SparkConfiguration.from_json(json)
# print the JSON string representation of the object
print(SparkConfiguration.to_json())

# convert the object into a dict
spark_configuration_dict = spark_configuration_instance.to_dict()
# create an instance of SparkConfiguration from a dict
spark_configuration_from_dict = SparkConfiguration.from_dict(spark_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



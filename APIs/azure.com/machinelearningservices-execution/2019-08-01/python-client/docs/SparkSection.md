# SparkSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[SparkMavenPackage]**](SparkMavenPackage.md) | The Spark packages to use. | [optional] 
**precache_packages** | **bool** | Whether to precache the packages. | [optional] 
**repositories** | **List[str]** | The list of spark repositories. | [optional] 

## Example

```python
from openapi_client.models.spark_section import SparkSection

# TODO update the JSON string below
json = "{}"
# create an instance of SparkSection from a JSON string
spark_section_instance = SparkSection.from_json(json)
# print the JSON string representation of the object
print(SparkSection.to_json())

# convert the object into a dict
spark_section_dict = spark_section_instance.to_dict()
# create an instance of SparkSection from a dict
spark_section_from_dict = SparkSection.from_dict(spark_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



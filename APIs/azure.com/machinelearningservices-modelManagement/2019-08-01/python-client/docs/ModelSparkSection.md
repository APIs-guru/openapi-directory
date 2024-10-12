# ModelSparkSection


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**packages** | [**List[SparkMavenPackage]**](SparkMavenPackage.md) | The Spark packages to use. | [optional] 
**precache_packages** | **bool** | Whether to precache the packages. | [optional] 
**repositories** | **List[str]** | The list of spark repositories. | [optional] 

## Example

```python
from openapi_client.models.model_spark_section import ModelSparkSection

# TODO update the JSON string below
json = "{}"
# create an instance of ModelSparkSection from a JSON string
model_spark_section_instance = ModelSparkSection.from_json(json)
# print the JSON string representation of the object
print(ModelSparkSection.to_json())

# convert the object into a dict
model_spark_section_dict = model_spark_section_instance.to_dict()
# create an instance of ModelSparkSection from a dict
model_spark_section_from_dict = ModelSparkSection.from_dict(model_spark_section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SparkMavenPackage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact** | **str** |  | [optional] 
**group** | **str** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.spark_maven_package import SparkMavenPackage

# TODO update the JSON string below
json = "{}"
# create an instance of SparkMavenPackage from a JSON string
spark_maven_package_instance = SparkMavenPackage.from_json(json)
# print the JSON string representation of the object
print(SparkMavenPackage.to_json())

# convert the object into a dict
spark_maven_package_dict = spark_maven_package_instance.to_dict()
# create an instance of SparkMavenPackage from a dict
spark_maven_package_from_dict = SparkMavenPackage.from_dict(spark_maven_package_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



# SparkOptions

Options for a user-defined Spark routine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**archive_uris** | **List[str]** | Archive files to be extracted into the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). | [optional] 
**connection** | **str** | Fully qualified name of the user-provided Spark connection object. Format: &#x60;&#x60;&#x60;\&quot;projects/{project_id}/locations/{location_id}/connections/{connection_id}\&quot;&#x60;&#x60;&#x60; | [optional] 
**container_image** | **str** | Custom container image for the runtime environment. | [optional] 
**file_uris** | **List[str]** | Files to be placed in the working directory of each executor. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). | [optional] 
**jar_uris** | **List[str]** | JARs to include on the driver and executor CLASSPATH. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). | [optional] 
**main_class** | **str** | The fully qualified name of a class in jar_uris, for example, com.example.wordcount. Exactly one of main_class and main_jar_uri field should be set for Java/Scala language type. | [optional] 
**main_file_uri** | **str** | The main file/jar URI of the Spark application. Exactly one of the definition_body field and the main_file_uri field must be set for Python. Exactly one of main_class and main_file_uri field should be set for Java/Scala language type. | [optional] 
**properties** | **Dict[str, str]** | Configuration properties as a set of key/value pairs, which will be passed on to the Spark application. For more information, see [Apache Spark](https://spark.apache.org/docs/latest/index.html) and the [procedure option list](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-definition-language#procedure_option_list). | [optional] 
**py_file_uris** | **List[str]** | Python files to be placed on the PYTHONPATH for PySpark application. Supported file types: &#x60;.py&#x60;, &#x60;.egg&#x60;, and &#x60;.zip&#x60;. For more information about Apache Spark, see [Apache Spark](https://spark.apache.org/docs/latest/index.html). | [optional] 
**runtime_version** | **str** | Runtime version. If not specified, the default runtime version is used. | [optional] 

## Example

```python
from openapi_client.models.spark_options import SparkOptions

# TODO update the JSON string below
json = "{}"
# create an instance of SparkOptions from a JSON string
spark_options_instance = SparkOptions.from_json(json)
# print the JSON string representation of the object
print(SparkOptions.to_json())

# convert the object into a dict
spark_options_dict = spark_options_instance.to_dict()
# create an instance of SparkOptions from a dict
spark_options_from_dict = SparkOptions.from_dict(spark_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



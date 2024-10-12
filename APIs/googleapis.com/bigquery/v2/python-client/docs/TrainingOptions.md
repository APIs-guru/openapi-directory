# TrainingOptions

Options used in model training.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_fn** | **str** | Activation function of the neural nets. | [optional] 
**adjust_step_changes** | **bool** | If true, detect step changes and make data adjustment in the input time series. | [optional] 
**approx_global_feature_contrib** | **bool** | Whether to use approximate feature contribution method in XGBoost model explanation for global explain. | [optional] 
**auto_arima** | **bool** | Whether to enable auto ARIMA or not. | [optional] 
**auto_arima_max_order** | **str** | The max value of the sum of non-seasonal p and q. | [optional] 
**auto_arima_min_order** | **str** | The min value of the sum of non-seasonal p and q. | [optional] 
**auto_class_weights** | **bool** | Whether to calculate class weights automatically based on the popularity of each label. | [optional] 
**batch_size** | **str** | Batch size for dnn models. | [optional] 
**booster_type** | **str** | Booster type for boosted tree models. | [optional] 
**budget_hours** | **float** | Budget in hours for AutoML training. | [optional] 
**calculate_p_values** | **bool** | Whether or not p-value test should be computed for this model. Only available for linear and logistic regression models. | [optional] 
**category_encoding_method** | **str** | Categorical feature encoding method. | [optional] 
**clean_spikes_and_dips** | **bool** | If true, clean spikes and dips in the input time series. | [optional] 
**color_space** | **str** | Enums for color space, used for processing images in Object Table. See more details at https://www.tensorflow.org/io/tutorials/colorspace. | [optional] 
**colsample_bylevel** | **float** | Subsample ratio of columns for each level for boosted tree models. | [optional] 
**colsample_bynode** | **float** | Subsample ratio of columns for each node(split) for boosted tree models. | [optional] 
**colsample_bytree** | **float** | Subsample ratio of columns when constructing each tree for boosted tree models. | [optional] 
**dart_normalize_type** | **str** | Type of normalization algorithm for boosted tree models using dart booster. | [optional] 
**data_frequency** | **str** | The data frequency of a time series. | [optional] 
**data_split_column** | **str** | The column to split data with. This column won&#39;t be used as a feature. 1. When data_split_method is CUSTOM, the corresponding column should be boolean. The rows with true value tag are eval data, and the false are training data. 2. When data_split_method is SEQ, the first DATA_SPLIT_EVAL_FRACTION rows (from smallest to largest) in the corresponding column are used as training data, and the rest are eval data. It respects the order in Orderable data types: https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#data-type-properties | [optional] 
**data_split_eval_fraction** | **float** | The fraction of evaluation data over the whole input data. The rest of data will be used as training data. The format should be double. Accurate to two decimal places. Default value is 0.2. | [optional] 
**data_split_method** | **str** | The data split type for training and evaluation, e.g. RANDOM. | [optional] 
**decompose_time_series** | **bool** | If true, perform decompose time series and save the results. | [optional] 
**distance_type** | **str** | Distance type for clustering models. | [optional] 
**dropout** | **float** | Dropout probability for dnn models. | [optional] 
**early_stop** | **bool** | Whether to stop early when the loss doesn&#39;t improve significantly any more (compared to min_relative_progress). Used only for iterative training algorithms. | [optional] 
**enable_global_explain** | **bool** | If true, enable global explanation during training. | [optional] 
**feedback_type** | **str** | Feedback type that specifies which algorithm to run for matrix factorization. | [optional] 
**fit_intercept** | **bool** | Whether the model should include intercept during model training. | [optional] 
**hidden_units** | **List[str]** | Hidden units for dnn models. | [optional] 
**holiday_region** | **str** | The geographical region based on which the holidays are considered in time series modeling. If a valid value is specified, then holiday effects modeling is enabled. | [optional] 
**holiday_regions** | **List[str]** | A list of geographical regions that are used for time series modeling. | [optional] 
**horizon** | **str** | The number of periods ahead that need to be forecasted. | [optional] 
**hparam_tuning_objectives** | **List[str]** | The target evaluation metrics to optimize the hyperparameters for. | [optional] 
**include_drift** | **bool** | Include drift when fitting an ARIMA model. | [optional] 
**initial_learn_rate** | **float** | Specifies the initial learning rate for the line search learn rate strategy. | [optional] 
**input_label_columns** | **List[str]** | Name of input label columns in training data. | [optional] 
**instance_weight_column** | **str** | Name of the instance weight column for training data. This column isn&#39;t be used as a feature. | [optional] 
**integrated_gradients_num_steps** | **str** | Number of integral steps for the integrated gradients explain method. | [optional] 
**item_column** | **str** | Item column specified for matrix factorization models. | [optional] 
**kmeans_initialization_column** | **str** | The column used to provide the initial centroids for kmeans algorithm when kmeans_initialization_method is CUSTOM. | [optional] 
**kmeans_initialization_method** | **str** | The method used to initialize the centroids for kmeans algorithm. | [optional] 
**l1_reg_activation** | **float** | L1 regularization coefficient to activations. | [optional] 
**l1_regularization** | **float** | L1 regularization coefficient. | [optional] 
**l2_regularization** | **float** | L2 regularization coefficient. | [optional] 
**label_class_weights** | **Dict[str, float]** | Weights associated with each label class, for rebalancing the training data. Only applicable for classification models. | [optional] 
**learn_rate** | **float** | Learning rate in training. Used only for iterative training algorithms. | [optional] 
**learn_rate_strategy** | **str** | The strategy to determine learn rate for the current iteration. | [optional] 
**loss_type** | **str** | Type of loss function used during training run. | [optional] 
**max_iterations** | **str** | The maximum number of iterations in training. Used only for iterative training algorithms. | [optional] 
**max_parallel_trials** | **str** | Maximum number of trials to run in parallel. | [optional] 
**max_time_series_length** | **str** | The maximum number of time points in a time series that can be used in modeling the trend component of the time series. Don&#39;t use this option with the &#x60;timeSeriesLengthFraction&#x60; or &#x60;minTimeSeriesLength&#x60; options. | [optional] 
**max_tree_depth** | **str** | Maximum depth of a tree for boosted tree models. | [optional] 
**min_relative_progress** | **float** | When early_stop is true, stops training when accuracy improvement is less than &#39;min_relative_progress&#39;. Used only for iterative training algorithms. | [optional] 
**min_split_loss** | **float** | Minimum split loss for boosted tree models. | [optional] 
**min_time_series_length** | **str** | The minimum number of time points in a time series that are used in modeling the trend component of the time series. If you use this option you must also set the &#x60;timeSeriesLengthFraction&#x60; option. This training option ensures that enough time points are available when you use &#x60;timeSeriesLengthFraction&#x60; in trend modeling. This is particularly important when forecasting multiple time series in a single query using &#x60;timeSeriesIdColumn&#x60;. If the total number of time points is less than the &#x60;minTimeSeriesLength&#x60; value, then the query uses all available time points. | [optional] 
**min_tree_child_weight** | **str** | Minimum sum of instance weight needed in a child for boosted tree models. | [optional] 
**model_registry** | **str** | The model registry. | [optional] 
**model_uri** | **str** | Google Cloud Storage URI from which the model was imported. Only applicable for imported models. | [optional] 
**non_seasonal_order** | [**ArimaOrder**](ArimaOrder.md) |  | [optional] 
**num_clusters** | **str** | Number of clusters for clustering models. | [optional] 
**num_factors** | **str** | Num factors specified for matrix factorization models. | [optional] 
**num_parallel_tree** | **str** | Number of parallel trees constructed during each iteration for boosted tree models. | [optional] 
**num_principal_components** | **str** | Number of principal components to keep in the PCA model. Must be &lt;&#x3D; the number of features. | [optional] 
**num_trials** | **str** | Number of trials to run this hyperparameter tuning job. | [optional] 
**optimization_strategy** | **str** | Optimization strategy for training linear regression models. | [optional] 
**optimizer** | **str** | Optimizer used for training the neural nets. | [optional] 
**pca_explained_variance_ratio** | **float** | The minimum ratio of cumulative explained variance that needs to be given by the PCA model. | [optional] 
**pca_solver** | **str** | The solver for PCA. | [optional] 
**sampled_shapley_num_paths** | **str** | Number of paths for the sampled Shapley explain method. | [optional] 
**scale_features** | **bool** | If true, scale the feature values by dividing the feature standard deviation. Currently only apply to PCA. | [optional] 
**standardize_features** | **bool** | Whether to standardize numerical features. Default to true. | [optional] 
**subsample** | **float** | Subsample fraction of the training data to grow tree to prevent overfitting for boosted tree models. | [optional] 
**tf_version** | **str** | Based on the selected TF version, the corresponding docker image is used to train external models. | [optional] 
**time_series_data_column** | **str** | Column to be designated as time series data for ARIMA model. | [optional] 
**time_series_id_column** | **str** | The time series id column that was used during ARIMA model training. | [optional] 
**time_series_id_columns** | **List[str]** | The time series id columns that were used during ARIMA model training. | [optional] 
**time_series_length_fraction** | **float** | The fraction of the interpolated length of the time series that&#39;s used to model the time series trend component. All of the time points of the time series are used to model the non-trend component. This training option accelerates modeling training without sacrificing much forecasting accuracy. You can use this option with &#x60;minTimeSeriesLength&#x60; but not with &#x60;maxTimeSeriesLength&#x60;. | [optional] 
**time_series_timestamp_column** | **str** | Column to be designated as time series timestamp for ARIMA model. | [optional] 
**tree_method** | **str** | Tree construction algorithm for boosted tree models. | [optional] 
**trend_smoothing_window_size** | **str** | Smoothing window size for the trend component. When a positive value is specified, a center moving average smoothing is applied on the history trend. When the smoothing window is out of the boundary at the beginning or the end of the trend, the first element or the last element is padded to fill the smoothing window before the average is applied. | [optional] 
**user_column** | **str** | User column specified for matrix factorization models. | [optional] 
**vertex_ai_model_version_aliases** | **List[str]** | The version aliases to apply in Vertex AI model registry. Always overwrite if the version aliases exists in a existing model. | [optional] 
**wals_alpha** | **float** | Hyperparameter for matrix factoration when implicit feedback type is specified. | [optional] 
**warm_start** | **bool** | Whether to train a model from the last checkpoint. | [optional] 
**xgboost_version** | **str** | User-selected XGBoost versions for training of XGBoost models. | [optional] 

## Example

```python
from openapi_client.models.training_options import TrainingOptions

# TODO update the JSON string below
json = "{}"
# create an instance of TrainingOptions from a JSON string
training_options_instance = TrainingOptions.from_json(json)
# print the JSON string representation of the object
print(TrainingOptions.to_json())

# convert the object into a dict
training_options_dict = training_options_instance.to_dict()
# create an instance of TrainingOptions from a dict
training_options_from_dict = TrainingOptions.from_dict(training_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)



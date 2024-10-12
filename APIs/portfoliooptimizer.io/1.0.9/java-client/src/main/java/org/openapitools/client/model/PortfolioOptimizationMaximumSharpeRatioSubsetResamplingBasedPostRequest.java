/*
 * Portfolio Optimizer
 * Portfolio Optimizer is a [Web API](https://en.wikipedia.org/wiki/Web_API) to analyze and optimize investment portfolios (collection of financial assets such as stocks, bonds, ETFs, crypto-currencies) using modern portfolio theory algorithms (mean-variance, VaR, etc.).  # API General Information    Portfolio Optimizer is based on [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) for easy integration, uses [JSON](https://en.wikipedia.org/wiki/JSON) for the exchange of data and uses a standard [HTTP verb](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol#Request_methods) (`POST`) to represent the action(s).  Portfolio Optimizer is also as secured as a Web API could be:  * [256-bit HTTPS Encryption](https://en.wikipedia.org/wiki/HTTPS) * No usage of cookies * No usage of personal data    ## API Headers  The following HTTP header(s) are required when calling Portfolio Optimizer endpoints: * `Content-type: application/json`     This header specifies that the data provided in input to the endpoint is in JSON format  The following HTTP header(s) are optional when calling Portfolio Optimizer endpoints: * `Content-Encoding: gzip`     This header indicates that the data provided in input to the endpoint is compressed with gzip. * `X-API-Key: <private API key>`     This header enables [authenticated users](#auth) to provide their private [API key](#overview--api-key) in order to [benefit from higher API limits](#overview--api-limits)  ## API Key Portfolio Optimizer is free to use, but not free to run.  In order to obtain an API key and benefit from [higher API limits](#overview--api-limits), a *small* participation to Portfolio Optimizer running costs is required.  This participation takes the form of coffee(s), with one coffee = one month of usage.  <p><a href=\"https://www.buymeacoffee.com/portfolioopt\"><img alt='Buy a Coffee at buymeacoffee.com' src=\"https://img.buymeacoffee.com/button-api/?text=Buymeacoffee.com&emoji=&slug=portfolioopt&button_colour=000000&font_colour=ffffff&font_family=Cookie&outline_colour=ffffff&coffee_colour=FFDD00\"></a></p>   > **Notes:**  > * Please make sure not to expose your API key publicly!  ## API Limits   Portfolio Optimizer comes with *fairly reasonable* API limits.  For anonymous users:   * The API requests are restricted to a subset of all the available endpoints and/or endpoints features   * The API requests are limited to 1 request per second for all the anonymous users combined, with concurrent requests rejected  * The API requests are limited to 1 second of execution time * The API requests are limited to 20 assets, 250 portfolios, 500 series data points and 5 factors  For authenticated users with an [API key](#overview--api-key):   * The API requests have access to all the available endpoints and endpoints features * The API requests are limited to 10000 requests per 24 hour per API key, with concurrent requests queued * The API requests are limited to 2.5 seconds of execution time * The API requests are limited to 100 assets, 1250 portfolios, 2500 series data points and 25 factors  > **Notes:**  > * It is possible to further relax the API limits, or to disable the API limits alltogether; please [contact the support](https://portfoliooptimizer.io/contact/) for more details. > * Information on the API rate limits are provided in response messages HTTP headers `x-ratelimit-*`:   >   * `x-ratelimit-limit-second`, the limit on the number of API requests per second >   * `x-ratelimit-remaining-second`, the number of remaining API requests in the current second     >   * `x-ratelimit-limit-minute`, the limit on the number of API requests per minute >   * ...  ## API Regions Portfolio Optimizer servers are located in Western Europe.  > **Notes:**  > * It is possible to deploy Portfolio Optimizer in other geographical regions, for example to improve the API latency; please [contact the support](https://portfoliooptimizer.io/contact/) for more details.   ## API Response Codes         Standard [HTTP response codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes) are used by Portfolio Optimizer to provide details on the status of API requests.  | HTTP Code | Description | Notes | | --------- | ----------- | ----- | | 200 | Request successfully processed | - | | 400 | Request failed to be processed because of incorrect content | The response message body contains information on the incorrect content | | 401 | Request failed to be processed because of invalid API key | - | | 404 | Request failed to be processed because of non existing endpoint | The requested endpoint might exist, but needs to be accessed with another HTTP method (e.g., `POST` instead of `GET`) | | 429 | Request failed to be processed because of API limits violated | The response message HTTP headers `x-ratelimit-*` contain information on the [API limits](#overview--api-limits) | | 500 | Request failed to be processed because of an internal error | Something went wrong on Portfolio Optimizer side, do not hesitate to [report the issue](#overview--support) | | 502 | Request failed to be processed because of a temporary connectivity error | Something went wrong on Portfolio Optimizer side, please check the [API status](#overview--api-status) and do not hesitate to [report the issue](#overview--support) |  ## API Status    Portfolio Optimizer is monitored 24/7 by [UptimeRobot](https://stats.uptimerobot.com/wgW71SL1AW).  # Support  For any issue or question about Portfolio Optimizer, please do not hesitate to [contact the support](https://portfoliooptimizer.io/contact/). 
 *
 * The version of the OpenAPI document: 1.0.9
 * Contact: contact@portfoliooptimizer.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import org.openapitools.client.JSON;

/**
 * PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:17.384654-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest {
  public static final String SERIALIZED_NAME_ASSETS = "assets";
  @SerializedName(SERIALIZED_NAME_ASSETS)
  private Integer assets;

  public static final String SERIALIZED_NAME_ASSETS_COVARIANCE_MATRIX = "assetsCovarianceMatrix";
  @SerializedName(SERIALIZED_NAME_ASSETS_COVARIANCE_MATRIX)
  private List<List<BigDecimal>> assetsCovarianceMatrix = new ArrayList<>();

  public static final String SERIALIZED_NAME_ASSETS_RETURNS = "assetsReturns";
  @SerializedName(SERIALIZED_NAME_ASSETS_RETURNS)
  private List<BigDecimal> assetsReturns = new ArrayList<>();

  public static final String SERIALIZED_NAME_CONSTRAINTS = "constraints";
  @SerializedName(SERIALIZED_NAME_CONSTRAINTS)
  private PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints constraints;

  public static final String SERIALIZED_NAME_RISK_FREE_RATE = "riskFreeRate";
  @SerializedName(SERIALIZED_NAME_RISK_FREE_RATE)
  private BigDecimal riskFreeRate;

  public static final String SERIALIZED_NAME_SUBSET_PORTFOLIOS = "subsetPortfolios";
  @SerializedName(SERIALIZED_NAME_SUBSET_PORTFOLIOS)
  private Integer subsetPortfolios = 128;

  /**
   * The method to aggregate the subset portfolios
   */
  @JsonAdapter(SubsetPortfoliosAggregationMethodEnum.Adapter.class)
  public enum SubsetPortfoliosAggregationMethodEnum {
    AVERAGE("average"),
    
    MEDIAN("median");

    private String value;

    SubsetPortfoliosAggregationMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static SubsetPortfoliosAggregationMethodEnum fromValue(String value) {
      for (SubsetPortfoliosAggregationMethodEnum b : SubsetPortfoliosAggregationMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<SubsetPortfoliosAggregationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final SubsetPortfoliosAggregationMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public SubsetPortfoliosAggregationMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return SubsetPortfoliosAggregationMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      SubsetPortfoliosAggregationMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_SUBSET_PORTFOLIOS_AGGREGATION_METHOD = "subsetPortfoliosAggregationMethod";
  @SerializedName(SERIALIZED_NAME_SUBSET_PORTFOLIOS_AGGREGATION_METHOD)
  private SubsetPortfoliosAggregationMethodEnum subsetPortfoliosAggregationMethod = SubsetPortfoliosAggregationMethodEnum.AVERAGE;

  /**
   * The method to enumerate the subset portfolios
   */
  @JsonAdapter(SubsetPortfoliosEnumerationMethodEnum.Adapter.class)
  public enum SubsetPortfoliosEnumerationMethodEnum {
    COMPLETE("complete"),
    
    RANDOM_SAMPLING("randomSampling");

    private String value;

    SubsetPortfoliosEnumerationMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static SubsetPortfoliosEnumerationMethodEnum fromValue(String value) {
      for (SubsetPortfoliosEnumerationMethodEnum b : SubsetPortfoliosEnumerationMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<SubsetPortfoliosEnumerationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final SubsetPortfoliosEnumerationMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public SubsetPortfoliosEnumerationMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return SubsetPortfoliosEnumerationMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      SubsetPortfoliosEnumerationMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_SUBSET_PORTFOLIOS_ENUMERATION_METHOD = "subsetPortfoliosEnumerationMethod";
  @SerializedName(SERIALIZED_NAME_SUBSET_PORTFOLIOS_ENUMERATION_METHOD)
  private SubsetPortfoliosEnumerationMethodEnum subsetPortfoliosEnumerationMethod = SubsetPortfoliosEnumerationMethodEnum.RANDOM_SAMPLING;

  public static final String SERIALIZED_NAME_SUBSET_SIZE = "subsetSize";
  @SerializedName(SERIALIZED_NAME_SUBSET_SIZE)
  private Integer subsetSize;

  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest() {
  }

  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest assets(Integer assets) {
    this.assets = assets;
    return this;
  }

  /**
   * The number of assets
   * minimum: 2
   * @return assets
   */
  @javax.annotation.Nonnull
  public Integer getAssets() {
    return assets;
  }

  public void setAssets(Integer assets) {
    this.assets = assets;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest assetsCovarianceMatrix(List<List<BigDecimal>> assetsCovarianceMatrix) {
    this.assetsCovarianceMatrix = assetsCovarianceMatrix;
    return this;
  }

  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest addAssetsCovarianceMatrixItem(List<BigDecimal> assetsCovarianceMatrixItem) {
    if (this.assetsCovarianceMatrix == null) {
      this.assetsCovarianceMatrix = new ArrayList<>();
    }
    this.assetsCovarianceMatrix.add(assetsCovarianceMatrixItem);
    return this;
  }

  /**
   * assetsCovarianceMatrix[i][j] is the covariance between the asset i and the asset j
   * @return assetsCovarianceMatrix
   */
  @javax.annotation.Nonnull
  public List<List<BigDecimal>> getAssetsCovarianceMatrix() {
    return assetsCovarianceMatrix;
  }

  public void setAssetsCovarianceMatrix(List<List<BigDecimal>> assetsCovarianceMatrix) {
    this.assetsCovarianceMatrix = assetsCovarianceMatrix;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest assetsReturns(List<BigDecimal> assetsReturns) {
    this.assetsReturns = assetsReturns;
    return this;
  }

  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest addAssetsReturnsItem(BigDecimal assetsReturnsItem) {
    if (this.assetsReturns == null) {
      this.assetsReturns = new ArrayList<>();
    }
    this.assetsReturns.add(assetsReturnsItem);
    return this;
  }

  /**
   * assetsReturns[i] is the arithmetic return of asset i
   * @return assetsReturns
   */
  @javax.annotation.Nonnull
  public List<BigDecimal> getAssetsReturns() {
    return assetsReturns;
  }

  public void setAssetsReturns(List<BigDecimal> assetsReturns) {
    this.assetsReturns = assetsReturns;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest constraints(PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints constraints) {
    this.constraints = constraints;
    return this;
  }

  /**
   * Get constraints
   * @return constraints
   */
  @javax.annotation.Nullable
  public PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints getConstraints() {
    return constraints;
  }

  public void setConstraints(PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints constraints) {
    this.constraints = constraints;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest riskFreeRate(BigDecimal riskFreeRate) {
    this.riskFreeRate = riskFreeRate;
    return this;
  }

  /**
   * The risk free rate
   * @return riskFreeRate
   */
  @javax.annotation.Nonnull
  public BigDecimal getRiskFreeRate() {
    return riskFreeRate;
  }

  public void setRiskFreeRate(BigDecimal riskFreeRate) {
    this.riskFreeRate = riskFreeRate;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest subsetPortfolios(Integer subsetPortfolios) {
    this.subsetPortfolios = subsetPortfolios;
    return this;
  }

  /**
   * The number of subset portfolios to compute; only applicable if the enumeration method for the subset portfolios is random sampling
   * minimum: 1
   * @return subsetPortfolios
   */
  @javax.annotation.Nullable
  public Integer getSubsetPortfolios() {
    return subsetPortfolios;
  }

  public void setSubsetPortfolios(Integer subsetPortfolios) {
    this.subsetPortfolios = subsetPortfolios;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest subsetPortfoliosAggregationMethod(SubsetPortfoliosAggregationMethodEnum subsetPortfoliosAggregationMethod) {
    this.subsetPortfoliosAggregationMethod = subsetPortfoliosAggregationMethod;
    return this;
  }

  /**
   * The method to aggregate the subset portfolios
   * @return subsetPortfoliosAggregationMethod
   */
  @javax.annotation.Nullable
  public SubsetPortfoliosAggregationMethodEnum getSubsetPortfoliosAggregationMethod() {
    return subsetPortfoliosAggregationMethod;
  }

  public void setSubsetPortfoliosAggregationMethod(SubsetPortfoliosAggregationMethodEnum subsetPortfoliosAggregationMethod) {
    this.subsetPortfoliosAggregationMethod = subsetPortfoliosAggregationMethod;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest subsetPortfoliosEnumerationMethod(SubsetPortfoliosEnumerationMethodEnum subsetPortfoliosEnumerationMethod) {
    this.subsetPortfoliosEnumerationMethod = subsetPortfoliosEnumerationMethod;
    return this;
  }

  /**
   * The method to enumerate the subset portfolios
   * @return subsetPortfoliosEnumerationMethod
   */
  @javax.annotation.Nullable
  public SubsetPortfoliosEnumerationMethodEnum getSubsetPortfoliosEnumerationMethod() {
    return subsetPortfoliosEnumerationMethod;
  }

  public void setSubsetPortfoliosEnumerationMethod(SubsetPortfoliosEnumerationMethodEnum subsetPortfoliosEnumerationMethod) {
    this.subsetPortfoliosEnumerationMethod = subsetPortfoliosEnumerationMethod;
  }


  public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest subsetSize(Integer subsetSize) {
    this.subsetSize = subsetSize;
    return this;
  }

  /**
   * The number of assets to include in each subset portfolio; defaults to a value of order the square root of the total number of assets
   * minimum: 2
   * @return subsetSize
   */
  @javax.annotation.Nullable
  public Integer getSubsetSize() {
    return subsetSize;
  }

  public void setSubsetSize(Integer subsetSize) {
    this.subsetSize = subsetSize;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest = (PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest) o;
    return Objects.equals(this.assets, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.assets) &&
        Objects.equals(this.assetsCovarianceMatrix, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.assetsCovarianceMatrix) &&
        Objects.equals(this.assetsReturns, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.assetsReturns) &&
        Objects.equals(this.constraints, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.constraints) &&
        Objects.equals(this.riskFreeRate, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.riskFreeRate) &&
        Objects.equals(this.subsetPortfolios, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.subsetPortfolios) &&
        Objects.equals(this.subsetPortfoliosAggregationMethod, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.subsetPortfoliosAggregationMethod) &&
        Objects.equals(this.subsetPortfoliosEnumerationMethod, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.subsetPortfoliosEnumerationMethod) &&
        Objects.equals(this.subsetSize, portfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.subsetSize);
  }

  @Override
  public int hashCode() {
    return Objects.hash(assets, assetsCovarianceMatrix, assetsReturns, constraints, riskFreeRate, subsetPortfolios, subsetPortfoliosAggregationMethod, subsetPortfoliosEnumerationMethod, subsetSize);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest {\n");
    sb.append("    assets: ").append(toIndentedString(assets)).append("\n");
    sb.append("    assetsCovarianceMatrix: ").append(toIndentedString(assetsCovarianceMatrix)).append("\n");
    sb.append("    assetsReturns: ").append(toIndentedString(assetsReturns)).append("\n");
    sb.append("    constraints: ").append(toIndentedString(constraints)).append("\n");
    sb.append("    riskFreeRate: ").append(toIndentedString(riskFreeRate)).append("\n");
    sb.append("    subsetPortfolios: ").append(toIndentedString(subsetPortfolios)).append("\n");
    sb.append("    subsetPortfoliosAggregationMethod: ").append(toIndentedString(subsetPortfoliosAggregationMethod)).append("\n");
    sb.append("    subsetPortfoliosEnumerationMethod: ").append(toIndentedString(subsetPortfoliosEnumerationMethod)).append("\n");
    sb.append("    subsetSize: ").append(toIndentedString(subsetSize)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("assets");
    openapiFields.add("assetsCovarianceMatrix");
    openapiFields.add("assetsReturns");
    openapiFields.add("constraints");
    openapiFields.add("riskFreeRate");
    openapiFields.add("subsetPortfolios");
    openapiFields.add("subsetPortfoliosAggregationMethod");
    openapiFields.add("subsetPortfoliosEnumerationMethod");
    openapiFields.add("subsetSize");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assets");
    openapiRequiredFields.add("assetsCovarianceMatrix");
    openapiRequiredFields.add("assetsReturns");
    openapiRequiredFields.add("riskFreeRate");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest is not found in the empty JSON string", PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      // ensure the required json array is present
      if (jsonObj.get("assetsCovarianceMatrix") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsCovarianceMatrix").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsCovarianceMatrix` to be an array in the JSON string but got `%s`", jsonObj.get("assetsCovarianceMatrix").toString()));
      }
      // ensure the required json array is present
      if (jsonObj.get("assetsReturns") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsReturns").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsReturns` to be an array in the JSON string but got `%s`", jsonObj.get("assetsReturns").toString()));
      }
      // validate the optional field `constraints`
      if (jsonObj.get("constraints") != null && !jsonObj.get("constraints").isJsonNull()) {
        PortfolioAnalysisMeanVarianceEfficientFrontierPostRequestConstraints.validateJsonElement(jsonObj.get("constraints"));
      }
      if ((jsonObj.get("subsetPortfoliosAggregationMethod") != null && !jsonObj.get("subsetPortfoliosAggregationMethod").isJsonNull()) && !jsonObj.get("subsetPortfoliosAggregationMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `subsetPortfoliosAggregationMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("subsetPortfoliosAggregationMethod").toString()));
      }
      // validate the optional field `subsetPortfoliosAggregationMethod`
      if (jsonObj.get("subsetPortfoliosAggregationMethod") != null && !jsonObj.get("subsetPortfoliosAggregationMethod").isJsonNull()) {
        SubsetPortfoliosAggregationMethodEnum.validateJsonElement(jsonObj.get("subsetPortfoliosAggregationMethod"));
      }
      if ((jsonObj.get("subsetPortfoliosEnumerationMethod") != null && !jsonObj.get("subsetPortfoliosEnumerationMethod").isJsonNull()) && !jsonObj.get("subsetPortfoliosEnumerationMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `subsetPortfoliosEnumerationMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("subsetPortfoliosEnumerationMethod").toString()));
      }
      // validate the optional field `subsetPortfoliosEnumerationMethod`
      if (jsonObj.get("subsetPortfoliosEnumerationMethod") != null && !jsonObj.get("subsetPortfoliosEnumerationMethod").isJsonNull()) {
        SubsetPortfoliosEnumerationMethodEnum.validateJsonElement(jsonObj.get("subsetPortfoliosEnumerationMethod"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest>() {
           @Override
           public void write(JsonWriter out, PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
   * @throws IOException if the JSON string is invalid with respect to PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest
   */
  public static PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest.class);
  }

  /**
   * Convert an instance of PortfolioOptimizationMaximumSharpeRatioSubsetResamplingBasedPostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


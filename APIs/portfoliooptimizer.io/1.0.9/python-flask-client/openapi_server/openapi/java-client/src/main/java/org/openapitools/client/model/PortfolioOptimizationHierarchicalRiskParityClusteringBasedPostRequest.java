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
import org.openapitools.client.model.PortfolioConstructionRandomPostRequestConstraints;

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
 * PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-10-12T07:52:30.576111-04:00[America/New_York]", comments = "Generator version: 7.9.0")
public class PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest {
  /**
   * The allocation method to use across clusters
   */
  @JsonAdapter(AcrossClusterAllocationMethodEnum.Adapter.class)
  public enum AcrossClusterAllocationMethodEnum {
    EQUAL_WEIGHTING("equalWeighting"),
    
    INVERSE_VOLATILITY("inverseVolatility"),
    
    INVERSE_VARIANCE("inverseVariance");

    private String value;

    AcrossClusterAllocationMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static AcrossClusterAllocationMethodEnum fromValue(String value) {
      for (AcrossClusterAllocationMethodEnum b : AcrossClusterAllocationMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<AcrossClusterAllocationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final AcrossClusterAllocationMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public AcrossClusterAllocationMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return AcrossClusterAllocationMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      AcrossClusterAllocationMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_ACROSS_CLUSTER_ALLOCATION_METHOD = "acrossClusterAllocationMethod";
  @SerializedName(SERIALIZED_NAME_ACROSS_CLUSTER_ALLOCATION_METHOD)
  private AcrossClusterAllocationMethodEnum acrossClusterAllocationMethod = AcrossClusterAllocationMethodEnum.EQUAL_WEIGHTING;

  public static final String SERIALIZED_NAME_ASSETS = "assets";
  @SerializedName(SERIALIZED_NAME_ASSETS)
  private Integer assets;

  public static final String SERIALIZED_NAME_ASSETS_COVARIANCE_MATRIX = "assetsCovarianceMatrix";
  @SerializedName(SERIALIZED_NAME_ASSETS_COVARIANCE_MATRIX)
  private List<List<BigDecimal>> assetsCovarianceMatrix = new ArrayList<>();

  /**
   * The hierarchical clustering method to use
   */
  @JsonAdapter(ClusteringMethodEnum.Adapter.class)
  public enum ClusteringMethodEnum {
    SINGLE_LINKAGE("singleLinkage"),
    
    AVERAGE_LINKAGE("averageLinkage"),
    
    COMPLETE_LINKAGE("completeLinkage"),
    
    WARD_LINKAGE("wardLinkage");

    private String value;

    ClusteringMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ClusteringMethodEnum fromValue(String value) {
      for (ClusteringMethodEnum b : ClusteringMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ClusteringMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ClusteringMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ClusteringMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ClusteringMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      ClusteringMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_CLUSTERING_METHOD = "clusteringMethod";
  @SerializedName(SERIALIZED_NAME_CLUSTERING_METHOD)
  private ClusteringMethodEnum clusteringMethod = ClusteringMethodEnum.WARD_LINKAGE;

  /**
   * The order to impose on the hierarchical clustering tree leaves
   */
  @JsonAdapter(ClusteringOrderingEnum.Adapter.class)
  public enum ClusteringOrderingEnum {
    R_HCLUST("r-hclust"),
    
    OPTIMAL("optimal");

    private String value;

    ClusteringOrderingEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static ClusteringOrderingEnum fromValue(String value) {
      for (ClusteringOrderingEnum b : ClusteringOrderingEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<ClusteringOrderingEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final ClusteringOrderingEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public ClusteringOrderingEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return ClusteringOrderingEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      ClusteringOrderingEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_CLUSTERING_ORDERING = "clusteringOrdering";
  @SerializedName(SERIALIZED_NAME_CLUSTERING_ORDERING)
  private ClusteringOrderingEnum clusteringOrdering = ClusteringOrderingEnum.R_HCLUST;

  public static final String SERIALIZED_NAME_CLUSTERS = "clusters";
  @SerializedName(SERIALIZED_NAME_CLUSTERS)
  private Integer clusters;

  public static final String SERIALIZED_NAME_CONSTRAINTS = "constraints";
  @SerializedName(SERIALIZED_NAME_CONSTRAINTS)
  private PortfolioConstructionRandomPostRequestConstraints constraints;

  /**
   * The allocation method to use within clusters
   */
  @JsonAdapter(WithinClusterAllocationMethodEnum.Adapter.class)
  public enum WithinClusterAllocationMethodEnum {
    EQUAL_WEIGHTING("equalWeighting"),
    
    INVERSE_VOLATILITY("inverseVolatility"),
    
    INVERSE_VARIANCE("inverseVariance");

    private String value;

    WithinClusterAllocationMethodEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static WithinClusterAllocationMethodEnum fromValue(String value) {
      for (WithinClusterAllocationMethodEnum b : WithinClusterAllocationMethodEnum.values()) {
        if (b.value.equals(value)) {
          return b;
        }
      }
      throw new IllegalArgumentException("Unexpected value '" + value + "'");
    }

    public static class Adapter extends TypeAdapter<WithinClusterAllocationMethodEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final WithinClusterAllocationMethodEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public WithinClusterAllocationMethodEnum read(final JsonReader jsonReader) throws IOException {
        String value =  jsonReader.nextString();
        return WithinClusterAllocationMethodEnum.fromValue(value);
      }
    }

    public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      String value = jsonElement.getAsString();
      WithinClusterAllocationMethodEnum.fromValue(value);
    }
  }

  public static final String SERIALIZED_NAME_WITHIN_CLUSTER_ALLOCATION_METHOD = "withinClusterAllocationMethod";
  @SerializedName(SERIALIZED_NAME_WITHIN_CLUSTER_ALLOCATION_METHOD)
  private WithinClusterAllocationMethodEnum withinClusterAllocationMethod = WithinClusterAllocationMethodEnum.EQUAL_WEIGHTING;

  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest() {
  }

  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest acrossClusterAllocationMethod(AcrossClusterAllocationMethodEnum acrossClusterAllocationMethod) {
    this.acrossClusterAllocationMethod = acrossClusterAllocationMethod;
    return this;
  }

  /**
   * The allocation method to use across clusters
   * @return acrossClusterAllocationMethod
   */
  @javax.annotation.Nullable
  public AcrossClusterAllocationMethodEnum getAcrossClusterAllocationMethod() {
    return acrossClusterAllocationMethod;
  }

  public void setAcrossClusterAllocationMethod(AcrossClusterAllocationMethodEnum acrossClusterAllocationMethod) {
    this.acrossClusterAllocationMethod = acrossClusterAllocationMethod;
  }


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest assets(Integer assets) {
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


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest assetsCovarianceMatrix(List<List<BigDecimal>> assetsCovarianceMatrix) {
    this.assetsCovarianceMatrix = assetsCovarianceMatrix;
    return this;
  }

  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest addAssetsCovarianceMatrixItem(List<BigDecimal> assetsCovarianceMatrixItem) {
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


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest clusteringMethod(ClusteringMethodEnum clusteringMethod) {
    this.clusteringMethod = clusteringMethod;
    return this;
  }

  /**
   * The hierarchical clustering method to use
   * @return clusteringMethod
   */
  @javax.annotation.Nullable
  public ClusteringMethodEnum getClusteringMethod() {
    return clusteringMethod;
  }

  public void setClusteringMethod(ClusteringMethodEnum clusteringMethod) {
    this.clusteringMethod = clusteringMethod;
  }


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest clusteringOrdering(ClusteringOrderingEnum clusteringOrdering) {
    this.clusteringOrdering = clusteringOrdering;
    return this;
  }

  /**
   * The order to impose on the hierarchical clustering tree leaves
   * @return clusteringOrdering
   */
  @javax.annotation.Nullable
  public ClusteringOrderingEnum getClusteringOrdering() {
    return clusteringOrdering;
  }

  public void setClusteringOrdering(ClusteringOrderingEnum clusteringOrdering) {
    this.clusteringOrdering = clusteringOrdering;
  }


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest clusters(Integer clusters) {
    this.clusters = clusters;
    return this;
  }

  /**
   * The number of clusters to use in the hierarchical clustering tree; if not provided, the number of clusters to use is computed using the gap statistic method, as described in the first reference
   * minimum: 1
   * @return clusters
   */
  @javax.annotation.Nullable
  public Integer getClusters() {
    return clusters;
  }

  public void setClusters(Integer clusters) {
    this.clusters = clusters;
  }


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest constraints(PortfolioConstructionRandomPostRequestConstraints constraints) {
    this.constraints = constraints;
    return this;
  }

  /**
   * Get constraints
   * @return constraints
   */
  @javax.annotation.Nullable
  public PortfolioConstructionRandomPostRequestConstraints getConstraints() {
    return constraints;
  }

  public void setConstraints(PortfolioConstructionRandomPostRequestConstraints constraints) {
    this.constraints = constraints;
  }


  public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest withinClusterAllocationMethod(WithinClusterAllocationMethodEnum withinClusterAllocationMethod) {
    this.withinClusterAllocationMethod = withinClusterAllocationMethod;
    return this;
  }

  /**
   * The allocation method to use within clusters
   * @return withinClusterAllocationMethod
   */
  @javax.annotation.Nullable
  public WithinClusterAllocationMethodEnum getWithinClusterAllocationMethod() {
    return withinClusterAllocationMethod;
  }

  public void setWithinClusterAllocationMethod(WithinClusterAllocationMethodEnum withinClusterAllocationMethod) {
    this.withinClusterAllocationMethod = withinClusterAllocationMethod;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest = (PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest) o;
    return Objects.equals(this.acrossClusterAllocationMethod, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.acrossClusterAllocationMethod) &&
        Objects.equals(this.assets, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.assets) &&
        Objects.equals(this.assetsCovarianceMatrix, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.assetsCovarianceMatrix) &&
        Objects.equals(this.clusteringMethod, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.clusteringMethod) &&
        Objects.equals(this.clusteringOrdering, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.clusteringOrdering) &&
        Objects.equals(this.clusters, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.clusters) &&
        Objects.equals(this.constraints, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.constraints) &&
        Objects.equals(this.withinClusterAllocationMethod, portfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.withinClusterAllocationMethod);
  }

  @Override
  public int hashCode() {
    return Objects.hash(acrossClusterAllocationMethod, assets, assetsCovarianceMatrix, clusteringMethod, clusteringOrdering, clusters, constraints, withinClusterAllocationMethod);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest {\n");
    sb.append("    acrossClusterAllocationMethod: ").append(toIndentedString(acrossClusterAllocationMethod)).append("\n");
    sb.append("    assets: ").append(toIndentedString(assets)).append("\n");
    sb.append("    assetsCovarianceMatrix: ").append(toIndentedString(assetsCovarianceMatrix)).append("\n");
    sb.append("    clusteringMethod: ").append(toIndentedString(clusteringMethod)).append("\n");
    sb.append("    clusteringOrdering: ").append(toIndentedString(clusteringOrdering)).append("\n");
    sb.append("    clusters: ").append(toIndentedString(clusters)).append("\n");
    sb.append("    constraints: ").append(toIndentedString(constraints)).append("\n");
    sb.append("    withinClusterAllocationMethod: ").append(toIndentedString(withinClusterAllocationMethod)).append("\n");
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
    openapiFields.add("acrossClusterAllocationMethod");
    openapiFields.add("assets");
    openapiFields.add("assetsCovarianceMatrix");
    openapiFields.add("clusteringMethod");
    openapiFields.add("clusteringOrdering");
    openapiFields.add("clusters");
    openapiFields.add("constraints");
    openapiFields.add("withinClusterAllocationMethod");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
    openapiRequiredFields.add("assets");
    openapiRequiredFields.add("assetsCovarianceMatrix");
  }

  /**
   * Validates the JSON Element and throws an exception if issues found
   *
   * @param jsonElement JSON Element
   * @throws IOException if the JSON Element is invalid with respect to PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest
   */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest is not found in the empty JSON string", PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }

      // check to make sure all required properties/fields are present in the JSON string
      for (String requiredField : PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.openapiRequiredFields) {
        if (jsonElement.getAsJsonObject().get(requiredField) == null) {
          throw new IllegalArgumentException(String.format("The required field `%s` is not found in the JSON string: %s", requiredField, jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("acrossClusterAllocationMethod") != null && !jsonObj.get("acrossClusterAllocationMethod").isJsonNull()) && !jsonObj.get("acrossClusterAllocationMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `acrossClusterAllocationMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("acrossClusterAllocationMethod").toString()));
      }
      // validate the optional field `acrossClusterAllocationMethod`
      if (jsonObj.get("acrossClusterAllocationMethod") != null && !jsonObj.get("acrossClusterAllocationMethod").isJsonNull()) {
        AcrossClusterAllocationMethodEnum.validateJsonElement(jsonObj.get("acrossClusterAllocationMethod"));
      }
      // ensure the required json array is present
      if (jsonObj.get("assetsCovarianceMatrix") == null) {
        throw new IllegalArgumentException("Expected the field `linkedContent` to be an array in the JSON string but got `null`");
      } else if (!jsonObj.get("assetsCovarianceMatrix").isJsonArray()) {
        throw new IllegalArgumentException(String.format("Expected the field `assetsCovarianceMatrix` to be an array in the JSON string but got `%s`", jsonObj.get("assetsCovarianceMatrix").toString()));
      }
      if ((jsonObj.get("clusteringMethod") != null && !jsonObj.get("clusteringMethod").isJsonNull()) && !jsonObj.get("clusteringMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `clusteringMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("clusteringMethod").toString()));
      }
      // validate the optional field `clusteringMethod`
      if (jsonObj.get("clusteringMethod") != null && !jsonObj.get("clusteringMethod").isJsonNull()) {
        ClusteringMethodEnum.validateJsonElement(jsonObj.get("clusteringMethod"));
      }
      if ((jsonObj.get("clusteringOrdering") != null && !jsonObj.get("clusteringOrdering").isJsonNull()) && !jsonObj.get("clusteringOrdering").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `clusteringOrdering` to be a primitive type in the JSON string but got `%s`", jsonObj.get("clusteringOrdering").toString()));
      }
      // validate the optional field `clusteringOrdering`
      if (jsonObj.get("clusteringOrdering") != null && !jsonObj.get("clusteringOrdering").isJsonNull()) {
        ClusteringOrderingEnum.validateJsonElement(jsonObj.get("clusteringOrdering"));
      }
      // validate the optional field `constraints`
      if (jsonObj.get("constraints") != null && !jsonObj.get("constraints").isJsonNull()) {
        PortfolioConstructionRandomPostRequestConstraints.validateJsonElement(jsonObj.get("constraints"));
      }
      if ((jsonObj.get("withinClusterAllocationMethod") != null && !jsonObj.get("withinClusterAllocationMethod").isJsonNull()) && !jsonObj.get("withinClusterAllocationMethod").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `withinClusterAllocationMethod` to be a primitive type in the JSON string but got `%s`", jsonObj.get("withinClusterAllocationMethod").toString()));
      }
      // validate the optional field `withinClusterAllocationMethod`
      if (jsonObj.get("withinClusterAllocationMethod") != null && !jsonObj.get("withinClusterAllocationMethod").isJsonNull()) {
        WithinClusterAllocationMethodEnum.validateJsonElement(jsonObj.get("withinClusterAllocationMethod"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest>() {
           @Override
           public void write(JsonWriter out, PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

  /**
   * Create an instance of PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest given an JSON string
   *
   * @param jsonString JSON string
   * @return An instance of PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest
   * @throws IOException if the JSON string is invalid with respect to PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest
   */
  public static PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest.class);
  }

  /**
   * Convert an instance of PortfolioOptimizationHierarchicalRiskParityClusteringBasedPostRequest to an JSON string
   *
   * @return JSON string
   */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}


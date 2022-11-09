var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import axios from "axios";
import { MatchContentType } from "../internal/utils/contenttype";
import * as operations from "./models/operations";
import { GetQueryParamSerializer } from "../internal/utils/queryparams";
import { SerializeRequestBody } from "../internal/utils/requestbody";
import FormData from 'form-data';
import { GetHeadersFromRequest } from "../internal/utils/headers";
import { CreateSecurityClient } from "../internal/utils/security";
import * as utils from "../internal/utils/utils";
import { Security } from "./models/shared";
var Servers = [
    "http://devops-guru.{region}.amazonaws.com",
    "https://devops-guru.{region}.amazonaws.com",
    "http://devops-guru.{region}.amazonaws.com.cn",
    "https://devops-guru.{region}.amazonaws.com.cn",
];
export function WithServerURL(serverURL, params) {
    return function (sdk) {
        if (params != null) {
            serverURL = utils.ReplaceParameters(serverURL, params);
        }
        sdk.serverURL = serverURL;
    };
}
export function WithClient(client) {
    return function (sdk) {
        sdk.defaultClient = client;
    };
}
export function WithSecurity(security) {
    if (!(security instanceof utils.SpeakeasyBase)) {
        security = new Security(security);
    }
    return function (sdk) {
        sdk.security = security;
    };
}
// SDK Documentation: https://docs.aws.amazon.com/devops-guru/ - Amazon Web Services documentation
var SDK = /** @class */ (function () {
    function SDK() {
        var opts = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            opts[_i] = arguments[_i];
        }
        var _this = this;
        opts.forEach(function (o) { return o(_this); });
        if (this.serverURL == "") {
            this.serverURL = Servers[0];
        }
        if (!this.defaultClient) {
            this.defaultClient = axios.create({ baseURL: this.serverURL });
        }
        if (!this.securityClient) {
            if (this.security) {
                this.securityClient = CreateSecurityClient(this.defaultClient, this.security);
            }
            else {
                this.securityClient = this.defaultClient;
            }
        }
    }
    // AddNotificationChannel - <p> Adds a notification channel to DevOps Guru. A notification channel is used to notify you about important DevOps Guru events, such as when an insight is generated. </p> <p>If you use an Amazon SNS topic in another account, you must attach a policy to it that grants DevOps Guru permission to it notifications. DevOps Guru adds the required policy on your behalf to send notifications using Amazon SNS in your account. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-required-permissions.html">Permissions for cross account Amazon SNS topics</a>.</p> <p>If you use an Amazon SNS topic that is encrypted by an AWS Key Management Service customer-managed key (CMK), then you must add permissions to the CMK. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/sns-kms-permissions.html">Permissions for AWS KMS–encrypted Amazon SNS topics</a>.</p>
    SDK.prototype.AddNotificationChannel = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.AddNotificationChannelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/channels";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.addNotificationChannelResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.serviceQuotaExceededException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 486:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeAccountHealth -  Returns the number of open reactive insights, the number of open proactive insights, and the number of metrics analyzed in your AWS account. Use these numbers to gauge the health of operations in your AWS account. 
    SDK.prototype.DescribeAccountHealth = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeAccountHealthRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/accounts/health";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeAccountHealthResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeAccountOverview -  For the time range passed in, returns the number of open reactive insight that were created, the number of open proactive insights that were created, and the Mean Time to Recover (MTTR) for all closed reactive insights. 
    SDK.prototype.DescribeAccountOverview = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeAccountOverviewRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/accounts/overview";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeAccountOverviewResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeAnomaly -  Returns details about an anomaly that you specify using its ID. 
    SDK.prototype.DescribeAnomaly = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeAnomalyRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/anomalies/{Id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeAnomalyResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeFeedback -  Returns the most recent feedback submitted in the current AWS account and Region. 
    SDK.prototype.DescribeFeedback = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeFeedbackRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/feedback";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeFeedbackResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeInsight -  Returns details about an insight that you specify using its ID. 
    SDK.prototype.DescribeInsight = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeInsightRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/insights/{Id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeInsightResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeResourceCollectionHealth -  Returns the number of open proactive insights, open reactive insights, and the Mean Time to Recover (MTTR) for all closed insights in resource collections in your account. You specify the type of AWS resources collection. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
    SDK.prototype.DescribeResourceCollectionHealth = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeResourceCollectionHealthRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/accounts/health/resource-collection/{ResourceCollectionType}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeResourceCollectionHealthResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // DescribeServiceIntegration -  Returns the integration status of services that are integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 
    SDK.prototype.DescribeServiceIntegration = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.DescribeServiceIntegrationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/service-integrations";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .get(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.describeServiceIntegrationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetCostEstimation - Returns an estimate of the monthly cost for DevOps Guru to analyze your AWS resources. For more information, see <a href="https://docs.aws.amazon.com/devops-guru/latest/userguide/cost-estimate.html">Estimate your Amazon DevOps Guru costs</a> and <a href="http://aws.amazon.com/devops-guru/pricing/">Amazon DevOps Guru pricing</a>.
    SDK.prototype.GetCostEstimation = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetCostEstimationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/cost-estimation";
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getCostEstimationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // GetResourceCollection -  Returns lists AWS resources that are of the specified resource collection type. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. 
    SDK.prototype.GetResourceCollection = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.GetResourceCollectionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/resource-collections/{ResourceCollectionType}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        return client
            .get(url, __assign({}, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.getResourceCollectionResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListAnomaliesForInsight -  Returns a list of the anomalies that belong to an insight that you specify using its ID. 
    SDK.prototype.ListAnomaliesForInsight = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListAnomaliesForInsightRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/anomalies/insight/{InsightId}", req.pathParams);
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.listAnomaliesForInsightResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListEvents -  Returns a list of the events emitted by the resources that are evaluated by DevOps Guru. You can use filters to specify which events are returned. 
    SDK.prototype.ListEvents = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListEventsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/events";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.listEventsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListInsights -  Returns a list of insights in your AWS account. You can specify which insights are returned by their start time and status (<code>ONGOING</code>, <code>CLOSED</code>, or <code>ANY</code>). 
    SDK.prototype.ListInsights = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListInsightsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/insights";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.listInsightsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListNotificationChannels -  Returns a list of notification channels configured for DevOps Guru. Each notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. The one supported notification channel is Amazon Simple Notification Service (Amazon SNS). 
    SDK.prototype.ListNotificationChannels = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListNotificationChannelsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/channels";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.listNotificationChannelsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // ListRecommendations -  Returns a list of a specified insight's recommendations. Each recommendation includes a list of related metrics and a list of related events. 
    SDK.prototype.ListRecommendations = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.ListRecommendationsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/recommendations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.listRecommendationsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // PutFeedback -  Collects customer feedback about the specified insight. 
    SDK.prototype.PutFeedback = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.PutFeedbackRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/feedback";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.putFeedbackResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // RemoveNotificationChannel -  Removes a notification channel from DevOps Guru. A notification channel is used to notify you when DevOps Guru generates an insight that contains information about how to improve your operations. 
    SDK.prototype.RemoveNotificationChannel = function (req, config) {
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.RemoveNotificationChannelRequest(req);
        }
        var baseURL = this.serverURL;
        var url = utils.GenerateURL(baseURL, "/channels/{Id}", req.pathParams);
        var client = this.securityClient;
        var headers = __assign(__assign({}, GetHeadersFromRequest(req.headers)), config === null || config === void 0 ? void 0 : config.headers);
        return client
            .delete(url, __assign({}, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.removeNotificationChannelResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // SearchInsights - <p> Returns a list of insights in your AWS account. You can specify which insights are returned by their start time, one or more statuses (<code>ONGOING</code>, <code>CLOSED</code>, and <code>CLOSED</code>), one or more severities (<code>LOW</code>, <code>MEDIUM</code>, and <code>HIGH</code>), and type (<code>REACTIVE</code> or <code>PROACTIVE</code>). </p> <p> Use the <code>Filters</code> parameter to specify status and severity search parameters. Use the <code>Type</code> parameter to specify <code>REACTIVE</code> or <code>PROACTIVE</code> in your search. </p>
    SDK.prototype.SearchInsights = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.SearchInsightsRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/insights/search";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var qpSerializer = GetQueryParamSerializer(req.queryParams);
        var requestConfig = __assign(__assign({}, config), { params: req.queryParams, paramsSerializer: qpSerializer });
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .post(url, body, __assign({ headers: headers }, requestConfig))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.searchInsightsResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // StartCostEstimation - Starts the creation of an estimate of the monthly cost to analyze your AWS resources.
    SDK.prototype.StartCostEstimation = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.StartCostEstimationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/cost-estimation";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.startCostEstimationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.resourceNotFoundException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 485:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateResourceCollection -  Updates the collection of resources that DevOps Guru analyzes. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks. You can specify up to 500 AWS CloudFormation stacks. This method also creates the IAM role required for you to use DevOps Guru. 
    SDK.prototype.UpdateResourceCollection = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateResourceCollectionRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/resource-collections";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.updateResourceCollectionResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    // UpdateServiceIntegration -  Enables or disables integration with a service that can be integrated with DevOps Guru. The one service that can be integrated with DevOps Guru is AWS Systems Manager, which can be used to create an OpsItem for each generated insight. 
    SDK.prototype.UpdateServiceIntegration = function (req, config) {
        var _a;
        if (!(req instanceof utils.SpeakeasyBase)) {
            req = new operations.UpdateServiceIntegrationRequest(req);
        }
        var baseURL = this.serverURL;
        var url = baseURL.replace(/\/$/, "") + "/service-integrations";
        var _b = [{}, {}], reqBodyHeaders = _b[0], reqBody = _b[1];
        try {
            _a = SerializeRequestBody(req), reqBodyHeaders = _a[0], reqBody = _a[1];
        }
        catch (e) {
            if (e instanceof Error) {
                throw new Error("Error serializing request body, cause: ".concat(e.message));
            }
        }
        var client = this.securityClient;
        var headers = __assign(__assign(__assign({}, GetHeadersFromRequest(req.headers)), reqBodyHeaders), config === null || config === void 0 ? void 0 : config.headers);
        var body;
        if (reqBody instanceof FormData)
            body = reqBody;
        else
            body = __assign({}, reqBody);
        if (body == null || Object.keys(body).length === 0)
            throw new Error("request body is required");
        return client
            .put(url, body, __assign({ headers: headers }, config))
            .then(function (httpRes) {
            var _a, _b;
            var contentType = (_b = (_a = httpRes === null || httpRes === void 0 ? void 0 : httpRes.headers) === null || _a === void 0 ? void 0 : _a["content-type"]) !== null && _b !== void 0 ? _b : "";
            if ((httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) == null)
                throw new Error("status code not found in response: ".concat(httpRes));
            var res = { statusCode: httpRes.status, contentType: contentType };
            switch (httpRes === null || httpRes === void 0 ? void 0 : httpRes.status) {
                case 200:
                    if (MatchContentType(contentType, "application/json")) {
                        res.updateServiceIntegrationResponse = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 480:
                    if (MatchContentType(contentType, "application/json")) {
                        res.accessDeniedException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 481:
                    if (MatchContentType(contentType, "application/json")) {
                        res.conflictException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 482:
                    if (MatchContentType(contentType, "application/json")) {
                        res.internalServerException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 483:
                    if (MatchContentType(contentType, "application/json")) {
                        res.throttlingException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
                case 484:
                    if (MatchContentType(contentType, "application/json")) {
                        res.validationException = httpRes === null || httpRes === void 0 ? void 0 : httpRes.data;
                    }
                    break;
            }
            return res;
        })
            .catch(function (error) { throw error; });
    };
    return SDK;
}());
export { SDK };
